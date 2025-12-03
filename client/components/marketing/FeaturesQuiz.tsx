import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

export function FeaturesQuiz() {
  const [answers, setAnswers] = useState({ teamSize: "1", speed: "std", volume: "low" });
  const plan = useMemo(() => {
    if (answers.teamSize === "1" && answers.volume === "low") return "Solopreneur";
    if (answers.speed === "same" || answers.volume === "high") return "Growth";
    return "Starter";
  }, [answers]);

  function set<K extends keyof typeof answers>(k: K, v: string) { setAnswers((a) => ({ ...a, [k]: v })); }

  return (
    <section className="mt-12 rounded-lg border p-6">
      <h2 className="text-xl font-semibold">What’s your pain point?</h2>
      <p className="mt-1 text-sm text-muted-foreground">Answer 3 quick questions for a personalized plan recommendation.</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div>
          <div className="text-xs font-medium">Team size</div>
          <select className="mt-1 w-full rounded border p-2 text-sm" value={answers.teamSize} onChange={(e) => set("teamSize", e.target.value)}>
            <option value="1">Just me</option>
            <option value="2-10">2–10</option>
            <option value=">10">10+</option>
          </select>
        </div>
        <div>
          <div className="text-xs font-medium">Speed</div>
          <select className="mt-1 w-full rounded border p-2 text-sm" value={answers.speed} onChange={(e) => set("speed", e.target.value)}>
            <option value="std">Standard (T+2)</option>
            <option value="same">Same‑day</option>
          </select>
        </div>
        <div>
          <div className="text-xs font-medium">Monthly ACH volume</div>
          <select className="mt-1 w-full rounded border p-2 text-sm" value={answers.volume} onChange={(e) => set("volume", e.target.value)}>
            <option value="low">Under 1,000</option>
            <option value="med">1,000–10,000</option>
            <option value="high">10,000+</option>
          </select>
        </div>
      </div>
      <div className="mt-5 rounded-md border bg-slate-50 p-3 text-sm">
        Recommended plan: <span className="font-semibold">{plan}</span>
      </div>
      <div className="mt-3 flex gap-2">
        <Button asChild><a href="/pricing">See pricing</a></Button>
        <Button asChild variant="outline"><a href="/support#contact">Talk to us</a></Button>
      </div>
    </section>
  );
}
