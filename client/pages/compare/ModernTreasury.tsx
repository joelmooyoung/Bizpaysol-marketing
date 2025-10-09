import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

export default function ModernTreasury() {
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container max-w-5xl">
          <h1 className="text-4xl font-extrabold tracking-tight">BizPay Solutions vs. Modern Treasury</h1>
          <p className="mt-3 text-muted-foreground">Comparison for engineering teams evaluating operational complexity, cost, and time‑to‑value.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">BizPay Solutions strengths</h2>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                <li>Faster time‑to‑live with opinionated ACH‑first flows</li>
                <li>Lower total cost with fewer moving parts</li>
                <li>Built‑in decline handling and reconciliation</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Modern Treasury considerations</h2>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                <li>Powerful platform with broader bank integrations</li>
                <li>Higher orchestration complexity for ACH‑specific use cases</li>
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
