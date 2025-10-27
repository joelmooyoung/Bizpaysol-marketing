import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Hero } from "@/components/marketing/Hero";
import { TrustBar } from "@/components/marketing/TrustBar";
import { TestimonialsGrid } from "@/components/marketing/TestimonialsGrid";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";
import { IntegrationsTeaser } from "@/components/marketing/IntegrationsTeaser";
import { AchNoCodeDemo } from "@/components/marketing/AchNoCodeDemo";
import { PricingPreview } from "@/components/marketing/PricingPreview";
import { RoiCalculator } from "@/components/marketing/RoiCalculator";
import { JourneyRoadmap } from "@/components/marketing/JourneyRoadmap";
import { setPageMeta, setStructuredData } from "@/lib/seo";

export default function Index() {
  useEffect(() => {
    setPageMeta({
      title: "ACH Payments Platform for Fintech - BizPay Solutions",
      description: "ACH Payments are fueling Fintech's Future. Complete ACH platform with powerful dashboard, developer API, lower fees, and faster reconciliation. SOC 2 Type II Verified.",
      canonicalUrl: "https://www.bizpaysol.com/",
      keywords: "ACH payments, ACH platform, fintech, payment processing, NACHA compliant",
      ogTitle: "ACH Payments are Fueling Fintech's Future",
      ogDescription: "Complete ACH platform built for enterprise security and scale. Lower costs, faster reconciliation, greater control.",
      twitterTitle: "ACH Payments are Fueling Fintech's Future",
      twitterDescription: "Enterprise ACH platform with API, dashboard, and webhooks. SOC 2 Type II Verified."
    });

    setStructuredData({
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "BizPay Solutions",
      "url": "https://www.bizpaysol.com/",
      "description": "Enterprise ACH payment platform for fintech companies",
      "areaServed": "US",
      "telephone": "+1-800-BIZPAY-1",
      "email": "support@bizpaysol.com",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ACH Payment Solutions"
      }
    });
  }, []);
  return (
    <Layout>
      <Hero />
      <JourneyRoadmap />
      <TrustBar />
      <PricingPreview />
      {/* No-code ACH demo */}
      <AchNoCodeDemo />

      <TestimonialsGrid />
      <RoiCalculator />
      <ComparisonTable />

      <section className="border-t bg-white py-12">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight">Comparisons</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            See why fintechs choose BizPay Solutions for ACH.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-4 text-sm">
            <li>
              <Link
                to="/compare/stripe-ach"
                className="text-primary hover:underline"
              >
                BizPay vs. Stripe ACH
              </Link>
            </li>
            <li>
              <Link
                to="/compare/dwolla"
                className="text-primary hover:underline"
              >
                BizPay vs. Dwolla
              </Link>
            </li>
            <li>
              <Link
                to="/compare/modern-treasury"
                className="text-primary hover:underline"
              >
                BizPay vs. Modern Treasury
              </Link>
            </li>
            <li>
              <Link
                to="/compare/gocardless"
                className="text-primary hover:underline"
              >
                BizPay vs. GoCardless
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <IntegrationsTeaser />

      <section className="border-t bg-white py-14">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight">
            Why BizPaySol Wins
          </h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2 text-sm text-muted-foreground">
            <li className="rounded-lg border bg-white p-4 text-foreground">
              <span className="font-medium">Dual Reference Tracking</span> —
              system + customer references for perfect reconciliation.
            </li>
            <li className="rounded-lg border bg-white p-4 text-foreground">
              <span className="font-medium">Signed Webhooks</span> — HMAC
              secrets, replay protection, delivery logs and retries.
            </li>
            <li className="rounded-lg border bg-white p-4 text-foreground">
              <span className="font-medium">Intelligent Rate Limiting</span> —
              burst/minute and daily caps with monitoring.
            </li>
            <li className="rounded-lg border bg-white p-4 text-foreground">
              <span className="font-medium">SFTP Transmission</span> — encrypted
              NACHA file delivery included.
            </li>
            <li className="rounded-lg border bg-white p-4 text-foreground">
              <span className="font-medium">RBAC</span> — admin, operator,
              viewer roles and audit trails.
            </li>
            <li className="rounded-lg border bg-white p-4 text-foreground">
              <span className="font-medium">Multi‑Company</span> — originator
              company management with individual API keys and limits.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t bg-gradient-to-r from-blue-600 to-sky-500 py-14 text-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h3 className="text-2xl font-bold">
              Ready to move faster with ACH?
            </h3>
            <p className="text-sm text-white/80">
              Start with our API in minutes or talk to our team.
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              asChild
              size="lg"
              className="bg-white text-slate-900 hover:bg-white/90"
            >
              <a
                href="https://sandbox.bizpaysol.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Live Sandbox
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/support#contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
