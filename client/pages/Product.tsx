import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, FileCheck2, PlugZap, BarChart2 } from "lucide-react";
import { FeaturesQuiz } from "@/components/marketing/FeaturesQuiz";
import { ComparisonMatrix } from "@/components/marketing/ComparisonMatrix";
import { setPageMeta, setStructuredData } from "@/lib/seo";

const featureCards = [
  {
    icon: Code2,
    title: "API First",
    desc: "Clean, developer-friendly REST API.",
  },
  {
    icon: FileCheck2,
    title: "Compliance Built-In",
    desc: "Aligned with NACHA rules and federal guidelines.",
  },
  {
    icon: PlugZap,
    title: "Custom Integrations",
    desc: "Works with your existing banking stack.",
  },
  {
    icon: BarChart2,
    title: "Advanced Reporting",
    desc: "Real-time dashboards and analytics.",
  },
];

export default function Product() {
  useEffect(() => {
    setPageMeta({
      title: "ACH Payment Platform Features - BizPaySol Product",
      description:
        "Enterprise ACH platform with API-first design, compliance built-in, custom integrations, and advanced reporting. Developer-friendly REST API with webhooks.",
      canonicalUrl: "https://www.bizpaysol.com/product/",
      keywords:
        "ACH platform features, payment API, NACHA compliant, developer API, payment webhooks",
      ogTitle: "Product & Features - BizPaySol",
      ogDescription:
        "Enterprise ACH built to simplify complex transactions, reduce risk, and accelerate efficiency.",
    });

    setStructuredData({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "BizPaySol ACH Platform",
      description:
        "Enterprise-grade ACH payment platform for fintech companies",
      brand: "BizPaySol",
    });
  }, []);

  return (
    <Layout>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Product & Features
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Enterprise ACH built to simplify the complex process of ACH
            transactions, reducing risk while accelerating operational
            efficiency.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((f) => (
              <Card key={f.title} className="h-full">
                <CardHeader>
                  <f.icon className="h-7 w-7 text-primary" />
                  <CardTitle className="mt-2 text-lg">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-muted-foreground">
                  {f.desc}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold">Find your fit</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Personalized plan recommendation in seconds.
            </p>
            <FeaturesQuiz />
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold">API Example</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Create a customer and initiate an ACH transfer:
            </p>
            <div className="mt-4 overflow-hidden rounded-md border bg-slate-950">
              <pre className="overflow-x-auto p-5 text-sm leading-relaxed text-slate-100">
                {`// Create a customer
POST /v1/customers
{
  "name": "Acme Corp",
  "email": "finance@acme.com"
}

// Initiate ACH transfer
POST /v1/transfers
{
  "customer_id": "cust_123",
  "amount": 15000,
  "currency": "USD",
  "description": "Q4 Invoice #INV-2025-001"
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <ComparisonMatrix />
    </Layout>
  );
}
