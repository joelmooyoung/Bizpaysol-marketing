import { Link } from "react-router-dom";
import { ArrowRight, Search, Calculator, FlaskConical } from "lucide-react";

export function JourneyRoadmap() {
  const steps = [
    {
      n: 1,
      title: "Explore",
      desc: "5-minute API demo, SDKs, and feature tour.",
      icon: Search,
      to: "/product",
      cta: "View Features",
    },
    {
      n: 2,
      title: "Calculate",
      desc: "See your cost savings in minutes. Free migration included.",
      icon: Calculator,
      to: "/pricing#calculator",
      cta: "Calculate Savings",
    },
    {
      n: 3,
      title: "Go Live",
      desc: "Sandbox included. Send your first ACH in 15 minutes.",
      icon: FlaskConical,
      to: "/docs",
      cta: "Get Started Free",
    },
  ];

  return (
    <section className="relative border-t bg-gradient-to-b from-white via-slate-50 to-slate-100 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Launch in 3 Steps
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            From discovery to live production in days, not months. No complex setup required.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
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
                className="group block h-full rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-lg hover:border-primary"
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

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Need help? <Link className="text-primary font-semibold hover:underline" to="/support#contact">Request a personalized demo</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
