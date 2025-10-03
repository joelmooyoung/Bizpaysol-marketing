import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Server, Zap, LifeBuoy } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    desc: "Enterprise-grade encryption and compliance.",
  },
  {
    icon: Zap,
    title: "Automated Workflow",
    desc: "Save time with built-in automation.",
  },
  {
    icon: Server,
    title: "Scalable API",
    desc: "Designed for fintechs, banks, and startups alike.",
  },
  {
    icon: LifeBuoy,
    title: "24/7 Support",
    desc: "Always available when you need us.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" />
        <div className="container grid items-center gap-8 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-2 inline-flex rounded-full border bg-white px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm">
              BizPaySol · Enterprise ACH
            </p>
            <p className="mb-4 text-xs text-muted-foreground">Powered by Enterprise Payment Solutions</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Smarter, Safer ACH Processor in the Cloud.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Enterprise ACH helps enterprises securely automate and manage ACH transactions with compliance-ready APIs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="px-6">
                <Link to="/support#contact">Request a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-6">
                <Link to="/pricing">Get Started</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl border bg-white p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {features.map((f) => (
                  <div key={f.title} className="rounded-lg border p-4">
                    <f.icon className="h-6 w-6 text-primary" />
                    <h3 className="mt-3 font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg bg-slate-50 p-4 text-sm text-muted-foreground">
                <span className="font-semibold text-slate-700">Trusted by leading fintech innovators</span>
                <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-5">
                  {[
                    "FinBank",
                    "PayWave",
                    "NovaPay",
                    "LedgerX",
                    "ScaleBank",
                  ].map((name) => (
                    <div
                      key={name}
                      className="flex h-10 items-center justify-center rounded border bg-white text-xs font-semibold text-slate-500"
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="border-t bg-white py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Purpose-built for compliance and scale</h2>
            <p className="mt-3 text-muted-foreground">
              Everything you need to run ACH transactions securely and efficiently.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border p-6">
                <f.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t bg-gradient-to-r from-blue-600 to-sky-500 py-14 text-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h3 className="text-2xl font-bold">Ready to move faster with ACH?</h3>
            <p className="text-sm text-white/80">Start with our API in minutes or talk to our team.</p>
          </div>
          <div className="flex gap-3">
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
              <Link to="/pricing">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/support#contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
