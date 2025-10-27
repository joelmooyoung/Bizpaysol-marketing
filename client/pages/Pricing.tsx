import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { PricingCalculator } from "@/components/pricing/PricingCalculator";
import { MigrationImport } from "@/components/pricing/MigrationImport";
import { ROICalculatorEnhanced } from "@/components/marketing/ROICalculatorEnhanced";
import { setPageMeta, setStructuredData } from "@/lib/seo";

export default function Pricing() {
  useEffect(() => {
    setPageMeta({
      title: "ACH Payment Pricing - BizPay Solutions | Simple, Transparent Rates",
      description: "Transparent ACH pricing plans starting at $0.25 per transaction. Essential, Professional, and Enterprise tiers. Free migration offer. No hidden fees.",
      canonicalUrl: "https://www.bizpaysol.com/pricing/",
      keywords: "ACH payment pricing, payment processor costs, ACH transaction fees, pricing calculator",
      ogTitle: "Simple, Transparent ACH Pricing",
      ogDescription: "ACH-first plans for builders. Estimate savings and migrate in minutes."
    });

    setStructuredData({
      "@context": "https://schema.org",
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "price": "0.25",
      "description": "ACH transaction price starting at $0.25 per transaction"
    });
  }, []);
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container">
          {(() => {
            const key = "pricing_promo_variant";
            const saved = typeof window !== "undefined" ? localStorage.getItem(key) : null;
            const variant = saved ?? (Math.random() < 0.5 ? "free-month" : "migration-help");
            if (!saved && typeof window !== "undefined") localStorage.setItem(key, variant);
            return (
              <div className="mb-4 rounded-md border bg-slate-50 p-3 text-sm">
                {variant === "free-month" ? (
                  <span><strong>Promo:</strong> Get your first month free on annual plans.</span>
                ) : (
                  <span><strong>Promo:</strong> Free white-glove migration from Gusto/Stripe this month.</span>
                )}
              </div>
            );
          })()}
          <h1 className="text-4xl font-extrabold tracking-tight">Simple, Transparent Pricing.</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            ACH-first plans for builders. Estimate savings and migrate in minutes.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg"><a href="/support#contact">Request Enterprise Demo</a></Button>
            <Button asChild size="lg" variant="outline"><a href="/docs">View API Documentation →</a></Button>
            <MigrationImport />
          </div>

          <section className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border p-6">
              <h3 className="text-lg font-semibold">Essential</h3>
              <p className="mt-1 text-sm text-muted-foreground">Pay‑as‑you‑grow</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>$0.25 per ACH transaction</li>
                <li>$0 monthly platform fee</li>
                <li>Bank account tokenization</li>
                <li>Standard webhooks, basic dashboard</li>
                <li>Email support, 2 business‑day payouts</li>
              </ul>
              <div className="mt-4">
                <Button asChild className="w-full"><a href="/pricing#start">Get Started</a></Button>
              </div>
            </div>
            <div className="rounded-xl border p-6 ring-1 ring-primary/20">
              <h3 className="text-lg font-semibold">Growth</h3>
              <p className="mt-1 text-sm text-muted-foreground">Scale with confidence</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>$0.15 per ACH + volume discounts</li>
                <li>$299/month platform fee</li>
                <li>Same Day ACH, advanced webhooks</li>
                <li>Retries, return code automation</li>
                <li>Premium support, 1 business‑day payouts, SSO/SAML</li>
              </ul>
              <div className="mt-4">
                <Button asChild variant="outline" className="w-full"><a href="mailto:sales@bizpaysol.com">Talk to Sales</a></Button>
              </div>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="text-lg font-semibold">Enterprise</h3>
              <p className="mt-1 text-sm text-muted-foreground">Custom pricing</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>Dedicated VPC options</li>
                <li>Custom limits and risk controls</li>
                <li>Multi‑entity support</li>
                <li>Priority SLA and solution architect</li>
                <li>White‑glove onboarding</li>
              </ul>
              <div className="mt-4">
                <Button asChild className="w-full"><a href="/support#contact">Request a Demo</a></Button>
              </div>
            </div>
          </section>

          <div className="mt-4 text-xs text-muted-foreground">
            Interchange‑free ACH. Additional fees may apply for Same Day ACH, returns (R01–R10), and bank verification provider costs.
          </div>

          <PricingCalculator />
        </div>
      </section>

      <ROICalculatorEnhanced />
    </Layout>
  );
}
