import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { EmailCaptureDialog } from "@/components/marketing/EmailCaptureDialog";
import { InteractiveDemo } from "@/components/marketing/InteractiveDemo";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" />
      <div className="container grid items-center gap-8 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-2 inline-flex rounded-full border bg-white px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm">
            BizPaySol · Enterprise ACH
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Run Payroll & Invoices in Under 5 Minutes—Without the Hassle.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Speed-focused, no‑BS workflows for SMBs. Simple pricing. Fraud protection included.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <EmailCaptureDialog triggerClassName="px-6" />
            <Button asChild variant="outline" className="px-6">
              <Link to="/support#contact">Request a Demo</Link>
            </Button>
          </div>
          <div className="mt-4 text-xs text-muted-foreground">
            Join 10K+ SMBs saving 100+ hours/year
          </div>
        </div>
        <div>
          <InteractiveDemo />
        </div>
      </div>
    </section>
  );
}
