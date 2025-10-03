import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, FileCheck2, PlugZap, BarChart2 } from "lucide-react";

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
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container">
          <h1 className="text-4xl font-extrabold tracking-tight">Product & Features</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            ClearACH is built to simplify the complex process of ACH project cessation, reducing risk while accelerating operational efficiency.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((f) => (
              <Card key={f.title} className="h-full">
                <CardHeader>
                  <f.icon className="h-7 w-7 text-primary" />
                  <CardTitle className="mt-2 text-lg">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm text-muted-foreground">{f.desc}</CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold">API Example</h2>
            <p className="mt-2 text-sm text-muted-foreground">Closing a project via REST:</p>
            <div className="mt-4 overflow-hidden rounded-md border bg-slate-950">
              <pre className="overflow-x-auto p-5 text-sm leading-relaxed text-slate-100">
{`POST /api/v1/projects/close
{
  "project_id": "12345",
  "reason": "completed"
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
