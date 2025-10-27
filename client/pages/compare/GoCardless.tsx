import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { setPageMeta, setStructuredData } from "@/lib/seo";

export default function GoCardless() {
  useEffect(() => {
    setPageMeta({
      title:
        "BizPay Solutions vs. GoCardless - US ACH vs International Bank Debit",
      description:
        "Compare BizPay Solutions with GoCardless. BizPay specializes in US B2B ACH payments while GoCardless focuses on international bank debit. See which fits your needs.",
      canonicalUrl: "https://www.bizpaysol.com/compare/gocardless/",
      keywords:
        "BizPay vs GoCardless, ACH payment processor, bank debit comparison, payment platform",
      ogTitle: "BizPay Solutions vs. GoCardless",
      ogDescription:
        "ACH for US B2B vs bank debit in other regions—fit, costs, and integration paths.",
    });

    setStructuredData({
      "@context": "https://schema.org",
      "@type": "ComparisonChart",
      title: "BizPay Solutions vs. GoCardless",
      description: "Detailed comparison of ACH payment features and pricing",
    });
  }, []);
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container max-w-5xl">
          <h1 className="text-4xl font-extrabold tracking-tight">
            BizPay Solutions vs. GoCardless
          </h1>
          <p className="mt-3 text-muted-foreground">
            ACH for US B2B vs bank debit in other regions—fit, costs, and
            integration paths.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">
                BizPay Solutions for US B2B
              </h2>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                <li>US‑focused ACH recurring billing and payouts</li>
                <li>
                  Returns automation and reconciliation for high‑ticket invoices
                </li>
                <li>Developer‑first APIs with 5‑minute Quickstart</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">GoCardless strengths</h2>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                <li>Strong international bank debit coverage</li>
                <li>
                  Useful where multi‑region mandate management is required
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <Link
              to="/support#contact"
              className="text-sm font-medium text-primary"
            >
              Request Enterprise Demo
            </Link>
            <Link
              to="/docs"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              View API Documentation →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
