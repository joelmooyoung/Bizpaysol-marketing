import Layout from "@/components/layout/Layout";

export default function CaseStudies() {
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
        </div>
      </section>
    </Layout>
  );
}
