import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";

export function ROICalculatorEnhanced() {
  const [monthlyVolume, setMonthlyVolume] = useState(100000);
  const [currentCost, setCurrentCost] = useState(0.015); // default 1.5%

  const bizpayPricing: Record<number, number> = {
    50000: 0.005,
    100000: 0.003,
    250000: 0.0025,
    500000: 0.002,
    1000000: 0.0018,
  };

  const getBizPayRate = () => {
    const rates = Object.entries(bizpayPricing)
      .map(([volume, rate]) => [parseInt(volume), rate])
      .sort((a, b) => b[0] - a[0]);

    for (const [volume, rate] of rates) {
      if (monthlyVolume >= volume) return rate as number;
    }
    return 0.005;
  };

  const bizpayRate = getBizPayRate();
  const bizpayMonthlyCost = monthlyVolume * bizpayRate;
  const currentMonthlyCost = monthlyVolume * currentCost;
  const monthlySavings = currentMonthlyCost - bizpayMonthlyCost;
  const annualSavings = monthlySavings * 12;
  const savingsPercent =
    currentMonthlyCost > 0
      ? Math.round(
          ((currentMonthlyCost - bizpayMonthlyCost) / currentMonthlyCost) * 100,
        )
      : 0;

  return (
    <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-16 border-t">
      <div className="container max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">
            Calculate Your Savings
          </h2>
          <p className="mt-2 text-muted-foreground">
            See how much you could save with BizPaySol
          </p>
        </div>

        <div className="bg-white rounded-xl border shadow-sm p-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Input Section */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Monthly Transaction Volume
                </label>
                <div className="space-y-3">
                  <Slider
                    value={[monthlyVolume]}
                    onValueChange={(value) => setMonthlyVolume(value[0])}
                    min={10000}
                    max={5000000}
                    step={10000}
                    className="w-full"
                  />
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="number"
                        value={monthlyVolume}
                        onChange={(e) =>
                          setMonthlyVolume(parseInt(e.target.value) || 0)
                        }
                        className="w-full px-3 py-2 border rounded-md text-sm"
                      />
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center">
                      ${(monthlyVolume / 1000000).toFixed(1)}M
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">
                  Current Payment Cost (%)
                </label>
                <div className="space-y-3">
                  <Slider
                    value={[currentCost * 100]}
                    onValueChange={(value) => setCurrentCost(value[0] / 100)}
                    min={0.1}
                    max={3}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="number"
                        value={currentCost * 100}
                        onChange={(e) =>
                          setCurrentCost(
                            parseFloat(e.target.value || "0") / 100,
                          )
                        }
                        className="w-full px-3 py-2 border rounded-md text-sm"
                      />
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center">
                      {currentCost > 0
                        ? `${(currentMonthlyCost / 1000).toFixed(1)}k/mo`
                        : "$0"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4 border">
                <p className="text-xs text-muted-foreground mb-1">
                  Current cost vs BizPaySol
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm line-through text-muted-foreground">
                    ${(currentMonthlyCost / 1000).toFixed(1)}k/mo
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    ${(bizpayMonthlyCost / 1000).toFixed(1)}k/mo
                  </span>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-4">
                  <div className="flex items-start gap-2">
                    <TrendingDown className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-emerald-700 font-semibold">
                        MONTHLY SAVINGS
                      </p>
                      <p className="text-3xl font-bold text-emerald-600 mt-1">
                        ${(monthlySavings / 1000).toFixed(1)}k
                      </p>
                      <p className="text-xs text-emerald-600 mt-1">
                        {savingsPercent}% reduction
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-lg border p-4 bg-white">
                    <p className="text-xs text-muted-foreground font-semibold">
                      ANNUAL SAVINGS
                    </p>
                    <p className="text-2xl font-bold text-primary mt-1">
                      ${(annualSavings / 1000).toFixed(1)}k/year
                    </p>
                  </div>

                  <div className="rounded-lg border p-4 bg-white">
                    <p className="text-xs text-muted-foreground font-semibold">
                      BIZPAYSOL RATE
                    </p>
                    <p className="text-2xl font-bold text-primary mt-1">
                      {(bizpayRate * 100).toFixed(2)}%
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild className="w-full" size="lg">
                <Link
                  to="/support#contact"
                  className="flex items-center justify-center gap-2"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3 text-center">
          <div>
            <p className="text-sm font-semibold text-slate-700">
              30-65% Cost Reduction
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Typical savings vs legacy providers
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700">
              7-30 Days DSO Reduction
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Faster cash flow with same-day ACH
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700">
              65% Manual Work Reduction
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Automatic reconciliation via webhooks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
