import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function PricingCalculator() {
  const [txCount, setTxCount] = useState(1000);
  const [avgAmount, setAvgAmount] = useState(50);
  const [sameDay, setSameDay] = useState(false);
  const [returnsRate, setReturnsRate] = useState(0.01);

  // Example competitor model: 0.5% + $0.25 per tx
  const competitorCost = useMemo(() => {
    const pct = 0.005 * txCount * avgAmount;
    const fixed = 0.25 * txCount;
    return pct + fixed;
  }, [txCount, avgAmount]);

  // Example BizPaySol model: flat $299/mo + same-day surcharge $0.40/tx + returns handling $4/return
  const bizBase = 299;
  const bizSameDay = (sameDay ? 0.4 : 0) * txCount;
  const bizReturns = 4 * (returnsRate * txCount);
  const bizCost = useMemo(() => bizBase + bizSameDay + bizReturns, [bizSameDay, bizReturns]);

  const savings = competitorCost - bizCost;

  return (
    <section className="mt-10 rounded-xl border bg-white p-6">
      <h2 className="text-xl font-semibold">Estimate your monthly cost</h2>
      <p className="mt-1 text-sm text-muted-foreground">Adjust inputs to see estimated savings vs. typical per-transaction pricing.</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="txCount">Monthly ACH transactions</Label>
          <Input id="txCount" type="number" min={0} value={txCount} onChange={(e) => setTxCount(Number(e.target.value || 0))} />
        </div>
        <div>
          <Label htmlFor="avgAmount">Average transaction amount ($)</Label>
          <Input id="avgAmount" type="number" min={0} value={avgAmount} onChange={(e) => setAvgAmount(Number(e.target.value || 0))} />
        </div>
        <div className="flex items-center justify-between rounded-md border p-3">
          <div>
            <Label htmlFor="sameDay">Enable same‑day ACH</Label>
            <div className="text-xs text-muted-foreground">Adds $0.40 per transaction</div>
          </div>
          <Switch id="sameDay" checked={sameDay} onCheckedChange={setSameDay} />
        </div>
        <div>
          <Label htmlFor="returnsRate">Returns rate (0–1)</Label>
          <Input id="returnsRate" type="number" min={0} max={1} step={0.005} value={returnsRate} onChange={(e) => setReturnsRate(Number(e.target.value || 0))} />
          <div className="text-xs text-muted-foreground mt-1">Estimated $4 per return handling</div>
        </div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-md border p-4 text-center">
          <div className="text-xs text-muted-foreground">Competitor est.</div>
          <div className="text-2xl font-bold">${competitorCost.toFixed(2)}</div>
        </div>
        <div className="rounded-md border p-4 text-center">
          <div className="text-xs text-muted-foreground">BizPaySol est.</div>
          <div className="text-2xl font-bold">${bizCost.toFixed(2)}</div>
        </div>
        <div className="rounded-md border p-4 text-center">
          <div className="text-xs text-muted-foreground">Estimated savings</div>
          <div className={`text-2xl font-bold ${savings >= 0 ? "text-emerald-600" : "text-rose-600"}`}>{savings >= 0 ? "+" : ""}${savings.toFixed(2)}</div>
        </div>
      </div>
    </section>
  );
}
