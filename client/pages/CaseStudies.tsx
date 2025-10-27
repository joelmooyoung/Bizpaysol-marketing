import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { setPageMeta, setStructuredData } from "@/lib/seo";

export default function CaseStudies() {
  useEffect(() => {
    setPageMeta({
      title: "BizPaySol Case Studies - Real Results from Fintech Companies",
      description: "See how companies reduced ACH costs by 30-65%, improved reconciliation, and launched faster with BizPaySol. Real case studies and ROI metrics.",
      canonicalUrl: "https://www.bizpaysol.com/case-studies/",
      keywords: "ACH case studies, payment processor success stories, fintech ROI, cost savings",
      ogTitle: "BizPaySol Case Studies",
      ogDescription: "How teams use BizPaySol to reduce cost and time-to-launch on ACH."
    });

    setStructuredData({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "BizPaySol Case Studies",
      "description": "Real-world examples of how businesses benefit from BizPaySol ACH platform"
    });
  }, []);
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container max-w-5xl">
          <h1 className="text-4xl font-extrabold tracking-tight">Case Studies</h1>
          <p className="mt-3 text-muted-foreground">How teams use BizPaySol to reduce cost and time-to-launch on ACH.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold">Retail SMB</h3>
              <p className="mt-2 text-sm text-muted-foreground">Switched from per-transaction fees to flat pricing, cutting costs by 30% while enabling same-day ACH for payouts.</p>
            </article>
            <article className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold">Agency</h3>
              <p className="mt-2 text-sm text-muted-foreground">Automated receivables and reconciliations via webhooks; first ACH live in under 5 minutes.</p>
            </article>
            <article className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold">Marketplace</h3>
              <p className="mt-2 text-sm text-muted-foreground">Scaled vendor payouts with built-in fraud checks and idempotency—zero duplicate transfers.</p>
            </article>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Case Study Template</h2>
            <p className="text-muted-foreground">Use this structure to showcase successful client integrations and outcomes.</p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Title</h3>
                <p className="text-sm text-muted-foreground">How a Mid‑Market Logistics Company Reduced Costs and DSO with ACH via BizPay Solutions</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Summary</h3>
                <p className="text-sm text-muted-foreground">2–3 sentences quantifying impact (e.g., −65% costs, −7 days DSO, +30% ops efficiency).</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Company Profile</h3>
                <p className="text-sm text-muted-foreground">Industry, size, key systems (ERP/CRM).</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Challenge</h3>
                <p className="text-sm text-muted-foreground">Fees, churn, reconciliation complexity, returns management.</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Solution</h3>
                <p className="text-sm text-muted-foreground">Why BizPay; integration scope; features used (Same Day ACH, retries, webhooks).</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Implementation</h3>
                <p className="text-sm text-muted-foreground">Timeline, team, stack, testing, go‑live steps.</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Results</h3>
                <p className="text-sm text-muted-foreground">Quantified KPIs and charts (costs, DSO, exception rate).</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Compliance & Security</h3>
                <p className="text-sm text-muted-foreground">NACHA controls, SOC 2, audit trails.</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Quotes</h3>
                <p className="text-sm text-muted-foreground">Executive and developer perspectives on impact and integration.</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Next Steps</h3>
                <p className="text-sm text-muted-foreground">Expansion to new flows, entities, or regions.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="/support#contact" className="text-sm font-medium text-primary">Talk to Sales</a>
              <a href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Start Onboarding</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
