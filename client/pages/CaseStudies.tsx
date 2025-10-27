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
            <div className="bg-slate-50 rounded-lg p-8 border">
              <h3 className="text-lg font-semibold mb-4">FleetSync Pro - Logistics Tech</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">THE CHALLENGE</h4>
                  <p className="text-sm mb-4">FleetSync was processing $15M/month in driver payouts and fuel reimbursements. With legacy wire transfers, they faced:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-5">
                    <li>$8,500/month in wire fees</li>
                    <li>3-5 day payment delays</li>
                    <li>Manual reconciliation taking 40 hrs/week</li>
                    <li>4.2% failed payment rate</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">THE SOLUTION</h4>
                  <p className="text-sm mb-4">Migrated to BizPaySol's intelligent ACH with:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-5">
                    <li>Same-day ACH processing</li>
                    <li>Automated retry logic for failed payments</li>
                    <li>Webhook-based reconciliation</li>
                    <li>NACHA compliance + SOC 2 Type II</li>
                  </ul>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-4 mt-6 pt-6 border-t">
                <div>
                  <div className="text-2xl font-bold text-primary">$102k</div>
                  <div className="text-xs text-muted-foreground">Annual savings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">7 days</div>
                  <div className="text-xs text-muted-foreground">DSO reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">0.8%</div>
                  <div className="text-xs text-muted-foreground">Failed rate now</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">5 days</div>
                  <div className="text-xs text-muted-foreground">Time to go live</div>
                </div>
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
