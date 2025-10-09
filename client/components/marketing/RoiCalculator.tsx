import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type ProcessorKey = "stripe" | "square" | "paypal" | "other";

const PROCESSORS: Record<ProcessorKey, { label: string; percent: number; fixed: number }> = {
  stripe: { label: "Stripe (2.9% + $0.30)", percent: 2.9, fixed: 0.3 },
  square: { label: "Square (2.6% + $0.10)", percent: 2.6, fixed: 0.1 },
  paypal: { label: "PayPal (2.7% + $0.30)", percent: 2.7, fixed: 0.3 },
  other: { label: "Other (3.5% average)", percent: 3.5, fixed: 0.3 },
};

function currency(n: number) {
  return "$" + Math.round(n).toLocaleString();
}

export function RoiCalculator() {
  const [volume, setVolume] = useState<number>(100000);
  const [avg, setAvg] = useState<number>(500);
  const [processor, setProcessor] = useState<ProcessorKey>("stripe");

  const { currentCost, bizpayCost, monthlySavings, annualSavings, threeYearSavings } = useMemo(() => {
    const p = PROCESSORS[processor];
    const numTx = Math.max(1, volume / Math.max(1, avg));
    const current = volume * (p.percent / 100) + numTx * p.fixed;
    const bizpay = volume * 0.005; // 0.5% growth tier per prompt
    const monthly = Math.max(0, current - bizpay);
    return {
      currentCost: current,
      bizpayCost: bizpay,
      monthlySavings: monthly,
      annualSavings: monthly * 12,
      threeYearSavings: monthly * 36,
    };
  }, [volume, avg, processor]);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-16 border-t">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Calculate Your Savings</h2>
            <p className="mt-2 text-muted-foreground">See how much you could save by switching to BizPaySol ACH</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Calculator Inputs */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Monthly Payment Volume</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    className="flex h-12 w-full rounded-md border border-input bg-white pl-7 pr-3 py-2 text-base"
                    placeholder="100000"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value) || 0)}
                    min={0}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Current Processor</label>
                <select
                  value={processor}
                  onChange={(e) => setProcessor(e.target.value as ProcessorKey)}
                  className="flex h-12 w-full rounded-md border border-input bg-white px-3 py-2 text-base"
                >
                  {(Object.keys(PROCESSORS) as ProcessorKey[]).map((key) => (
                    <option key={key} value={key}>
                      {PROCESSORS[key].label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Average Transaction Size</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    className="flex h-12 w-full rounded-md border border-input bg-white pl-7 pr-3 py-2 text-base"
                    placeholder="500"
                    value={avg}
                    onChange={(e) => setAvg(Number(e.target.value) || 0)}
                    min={1}
                  />
                </div>
              </div>

              <button
                className="w-full h-12 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90"
                onClick={(e) => e.preventDefault()}
              >
                Calculate Savings
              </button>
            </div>

            {/* Results Display */}
            <div className="rounded-xl border-2 border-primary bg-white p-8">
              <div className="text-center mb-6">
                <div className="text-sm font-semibold text-primary mb-2">Your Estimated Savings</div>
                <div className="text-5xl font-bold text-primary" aria-live="polite">{currency(monthlySavings)}</div>
                <div className="text-sm text-muted-foreground mt-1">per month</div>
              </div>

              <div className="space-y-4 border-t pt-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Current monthly cost:</span>
                  <span className="font-semibold">{currency(currentCost)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">BizPaySol cost:</span>
                  <span className="font-semibold text-emerald-600">{currency(bizpayCost)}</span>
                </div>
                <div className="flex justify-between text-sm pt-4 border-t">
                  <span className="font-semibold">Annual savings:</span>
                  <span className="font-bold text-xl text-primary">{currency(annualSavings)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">3-year savings:</span>
                  <span className="font-semibold">{currency(threeYearSavings)}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t text-center">
                <Link to="/support#contact" className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                  Request Custom Quote
                </Link>
                <p className="text-xs text-muted-foreground mt-3">Based on industry averages. Actual savings may vary.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
