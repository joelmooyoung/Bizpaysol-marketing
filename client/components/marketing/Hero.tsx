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
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-slate-50 to-white" />
      <div className="container grid items-center gap-12 py-20 md:grid-cols-2 md:py-32">
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="inline-flex rounded-full border bg-white px-4 py-1.5 text-xs font-semibold text-primary shadow-sm">
              ✨ Trusted by 2,000+ Companies
            </p>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-tight">
            ACH Payments are fueling modern Fintech's Future
          </h1>
          <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-700 sm:text-3xl">
            Complete ACH Platform — Powerful Dashboard + Developer API
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Enterprise ACH platform processing 50k+ transfers. Lower costs by
            30-65%, reduce DSO, launch faster.{" "}
            <span className="font-semibold">SOC 2 Type II Verified</span>.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="px-8">
                <Link to="/support#contact">Request Enterprise Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <Link to="/docs">View API Documentation →</Link>
              </Button>
              <Button asChild size="lg" className="px-8" variant="secondary">
                <a
                  href="https://sandbox.bizpaysol.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Launch Live Sandbox
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2 border-t-2 border-slate-200">
            <div className="text-xs text-slate-600 space-y-1">
              <p className="font-semibold">Security & Compliance</p>
              <p>
                SOC 2 Type II • ISO 27001 • NACHA • GDPR • TLS 1.2+ • AES-256
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <InteractiveDemo />
          {(import.meta.env?.VITE_FOUNDER_VIDEO_URL as string | undefined) ? (
            <VideoEmbed
              url={import.meta.env?.VITE_FOUNDER_VIDEO_URL as string}
              title="Founder walkthrough"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
