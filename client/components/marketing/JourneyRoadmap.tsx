import { Link } from "react-router-dom";
import { ArrowRight, Search, Calculator, FlaskConical } from "lucide-react";

export function JourneyRoadmap() {
  const steps = [
    {
      n: 1,
      title: "Explore",
      desc: "See product features, API, and integrations.",
      icon: Search,
      to: "/product",
      cta: "Explore Product",
    },
    {
      n: 2,
      title: "Calc",
      desc: "Estimate savings with our ROI & pricing calculator.",
      icon: Calculator,
      to: "/pricing#calculator",
      cta: "Run Calculator",
    },
    {
      n: 3,
      title: "Trial",
      desc: "Kick off a sandbox and send your first ACH.",
      icon: FlaskConical,
      to: "/docs",
      cta: "Start Trial",
    },
  ];

  return (
    <section className="relative border-t bg-gradient-to-b from-slate-50 to-white py-10">
      <div className="container">
        <h2 className="text-center text-2xl font-bold tracking-tight">
          Your 3‑Step Journey
        </h2>
        <p className="mt-1 text-center text-sm text-muted-foreground">
          Step 1: Explore → Step 2: Calc → Step 3: Trial
        </p>

        <div className="mt-6 grid items-stretch gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              {/* Connector arrows (md+) */}
              {i < steps.length - 1 ? (
                <div className="pointer-events-none absolute right-[-18px] top-1/2 hidden -translate-y-1/2 md:block">
                  <ArrowRight className="h-7 w-7 text-slate-300" />
                </div>
              ) : null}

              <Link
                to={s.to}
                className="group block h-full rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                    {s.n}
                  </div>
                  <div className="mt-0.5">
                    <div className="flex items-center gap-2">
                      <s.icon className="h-5 w-5 text-primary" />
                      <h3 className="text-base font-semibold">{s.title}</h3>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  {s.cta}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-xs text-muted-foreground">
          Prefer a guided tour? <Link className="text-primary hover:underline" to="/support#contact">Request a demo</Link>
        </div>
      </div>
    </section>
  );
}
