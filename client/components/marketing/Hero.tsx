import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { EmailCaptureDialog } from "@/components/marketing/EmailCaptureDialog";
import { InteractiveDemo } from "@/components/marketing/InteractiveDemo";

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
            BizPaySol · Enterprise ACH
          </p>
          <div className="mb-3 inline-flex rounded-md border bg-white p-1 text-xs shadow-sm">
            <button onClick={() => setPersona("solo")} className={`rounded px-3 py-1 ${persona === "solo" ? "bg-primary text-white" : "hover:bg-slate-100"}`}>Solopreneur</button>
            <button onClick={() => setPersona("team")} className={`rounded px-3 py-1 ${persona === "team" ? "bg-primary text-white" : "hover:bg-slate-100"}`}>Team Lead</button>
            <button onClick={() => setPersona("dev")} className={`rounded px-3 py-1 ${persona === "dev" ? "bg-primary text-white" : "hover:bg-slate-100"}`}>Developer</button>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Launch ACH Payments & Payouts in Minutes—Developer‑first API.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">{subline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <EmailCaptureDialog triggerClassName="px-6">Start Free Sandbox</EmailCaptureDialog>
            <Button asChild variant="outline" className="px-6">
              <Link to="/support#contact">Request a Demo</Link>
            </Button>
          </div>
          <div className="mt-4 text-xs text-muted-foreground">
            Join 10K+ SMBs saving 100+ hours/year
          </div>
        </div>
        <div className="space-y-4">
          <InteractiveDemo />
          {(() => {
            const url = import.meta.env.VITE_FOUNDER_VIDEO_URL as string | undefined;
            if (!url) return null;
            const { VideoEmbed } = require("@/components/marketing/VideoEmbed");
            return <VideoEmbed url={url} title="Founder walkthrough" />;
          })()}
        </div>
      </div>
    </section>
  );
}
