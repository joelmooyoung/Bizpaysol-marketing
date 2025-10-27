import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { setPageMeta, setStructuredData } from "@/lib/seo";

export default function StripeACH() {
  useEffect(() => {
    setPageMeta({
      title: "BizPay Solutions vs. Stripe ACH - Detailed Comparison",
      description: "Compare BizPay Solutions with Stripe ACH for B2B recurring payments. See the differences in costs, reliability, reconciliation, and developer experience.",
      canonicalUrl: "https://www.bizpaysol.com/compare/stripe-ach/",
      keywords: "BizPay vs Stripe, ACH comparison, payment processor comparison, Stripe ACH alternative",
      ogTitle: "BizPay Solutions vs. Stripe ACH",
      ogDescription: "Compare ACH payment solutions: BizPay vs Stripe ACH for B2B payments, costs, and features."
    });

    setStructuredData({
      "@context": "https://schema.org",
      "@type": "ComparisonChart",
      "title": "BizPay Solutions vs. Stripe ACH",
      "description": "Detailed comparison of ACH payment features and pricing"
    });
  }, []);
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container max-w-5xl">
          <h1 className="text-4xl font-extrabold tracking-tight">BizPay Solutions vs. Stripe ACH</h1>
          <p className="mt-3 text-muted-foreground">Compare ACH for B2B recurring payments: costs, reliability, reconciliation, and developer experience.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Where BizPay Solutions excels</h2>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                <li>ACH‑first workflows purpose‑built for B2B recurring invoices and payouts</li>
                <li>Lower total cost of ownership with predictable ACH fees</li>
                <li>Automated return handling and tiered retry policies</li>
                <li>Granular webhooks for instant, real‑time reconciliation</li>
                <li>Security headers, HSTS preload, and SOC 2 practices</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Considerations with Stripe ACH</h2>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                <li>Generalist gateway not optimized for ACH returns & exceptions</li>
                <li>Costs can increase with add‑ons and volume</li>
                <li>Reconciliation may require additional custom logic</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <Link to="/support#contact" className="text-sm font-medium text-primary">Request Enterprise Demo</Link>
            <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground">View API Documentation →</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
