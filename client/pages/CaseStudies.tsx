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
            <article className="rounded-lg border p-6 hover:shadow-md transition">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">CS</div>
                <div>
                  <h3 className="text-base font-semibold">CloudSource</h3>
                  <p className="text-xs text-muted-foreground">SaaS, $12M ARR</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">"Reduced DSO from 45 to 18 days. ACH recovery alone saves us $156k/year. Integration took 3 days."</p>
              <div className="mt-4 pt-4 border-t space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-muted-foreground">Annual savings:</span><span className="font-semibold">$180k</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Monthly volume:</span><span className="font-semibold">$2.4M</span></div>
              </div>
            </article>
            <article className="rounded-lg border p-6 hover:shadow-md transition">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">FP</div>
                <div>
                  <h3 className="text-base font-semibold">FlowPay</h3>
                  <p className="text-xs text-muted-foreground">Fintech, $28M ARR</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">"Our developer loved the API. Reduced payment reconciliation workload by 65%. Went live in 7 days."</p>
              <div className="mt-4 pt-4 border-t space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-muted-foreground">Cost reduction:</span><span className="font-semibold">42%</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Monthly volume:</span><span className="font-semibold">$8.1M</span></div>
              </div>
            </article>
            <article className="rounded-lg border p-6 hover:shadow-md transition">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">VP</div>
                <div>
                  <h3 className="text-base font-semibold">VendorPro</h3>
                  <p className="text-xs text-muted-foreground">B2B Marketplace, $8M ARR</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">"Eliminated manual reconciliation. Webhooks auto-update our accounting system. 2,400+ vendors paid daily."</p>
              <div className="mt-4 pt-4 border-t space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-muted-foreground">Manual work saved:</span><span className="font-semibold">30 hrs/mo</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Monthly volume:</span><span className="font-semibold">$18.5M</span></div>
              </div>
            </article>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Full Case Study Examples</h2>
            <p className="text-muted-foreground">Detailed breakdowns showing how companies transformed their payment operations.</p>
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
