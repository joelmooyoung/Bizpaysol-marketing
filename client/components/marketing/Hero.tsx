import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { EmailCaptureDialog } from "@/components/marketing/EmailCaptureDialog";
import { InteractiveDemo } from "@/components/marketing/InteractiveDemo";
import { VideoEmbed } from "@/components/marketing/VideoEmbed";

export function Hero() {
  const [persona, setPersona] = useState<"solo" | "team" | "dev">("dev");
  const subline = useMemo(() => {
    switch (persona) {
      case "solo":
        return "Send and receive ACH in minutes. Simple tools for solopreneurs.";
      case "team":
        return "Scale ACH payouts and receivables with approvals and webhooks.";
      default:
        return "ACH rails, webhooks, and onboarding out of the box. Simple pricing. Fraud protection included.";
    }
  }, [persona]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" />
      <div className="container grid items-center gap-8 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-2 inline-flex rounded-full border bg-white px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm">
            BizPay Solutions · NACHA‑Compliant ACH
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            The ACH API That Stops Card Decline Revenue Loss
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Integrate our high‑availability, TypeScript‑powered ACH platform to cut payment fees by 80% and reduce recurring billing failures.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="px-6">
              <Link to="/support#contact">Request Enterprise Demo</Link>
            </Button>
            <Button asChild variant="outline" className="px-6">
              <Link to="/docs">View API Documentation →</Link>
            </Button>
          </div>
          <div className="mt-4 text-xs text-muted-foreground">
            SOC 2 Type II • ISO 27001 • GDPR • TLS 1.2+ • Encryption in transit and at rest
          </div>
        </div>
        <div className="space-y-4">
          <InteractiveDemo />
          {(import.meta.env.VITE_FOUNDER_VIDEO_URL as string | undefined) ? (
            <VideoEmbed url={import.meta.env.VITE_FOUNDER_VIDEO_URL as string} title="Founder walkthrough" />
          ) : null}
        </div>
      </div>
    </section>
  );
}
