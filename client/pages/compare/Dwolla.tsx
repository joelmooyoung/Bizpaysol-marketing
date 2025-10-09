import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

export default function Dwolla() {
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container max-w-5xl">
          <h1 className="text-4xl font-extrabold tracking-tight">BizPay Solutions vs. Dwolla</h1>
          <p className="mt-3 text-muted-foreground">Focused ACH platform comparison for fintechs building recurring billing and payouts.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">BizPay Solutions advantages</h2>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                <li>5‑minute Quickstart and developer‑first docs</li>
                <li>Automated exception handling and retries</li>
                <li>Real‑time reconciliation webhooks and exports</li>
                <li>Security by default (CSP, HSTS, COOP/CORP/COEP)</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">When Dwolla may fit</h2>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                <li>Existing flows tied to a specific partner bank or network setup</li>
                <li>Custom orchestration preference managed in‑house</li>
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
