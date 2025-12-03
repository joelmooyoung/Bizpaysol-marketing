export function ComparisonTable() {
  return (
    <section className="border-t bg-white py-14">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Purpose‑Built for B2B ACH Recurring Payments</h2>
          <p className="mt-2 text-muted-foreground">Out‑execute generalist gateways with better reconciliation, failure handling, and developer speed.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Automated Real‑Time Reconciliation</h3>
            <p className="mt-2 text-sm text-muted-foreground">Instant, granular webhooks match deposits to customers immediately. Built‑in integrations for leading ERPs and ledgers.</p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Intelligent Decline Management</h3>
            <p className="mt-2 text-sm text-muted-foreground">Tiered handling of returns with auto‑retries, notifications, and seamless fallback to backup methods to maximize LTV.</p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Future‑Proof Platform</h3>
            <p className="mt-2 text-sm text-muted-foreground">TypeScript & cloud‑native architecture deployed globally, targeting ~1.5s API responses and enterprise‑grade stability.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
