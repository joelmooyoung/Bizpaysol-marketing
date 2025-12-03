export function IntegrationsTeaser() {
  const integrations = ["Shopify", "Xero", "QuickBooks", "Zapier", "Slack"];
  return (
    <section className="bg-white py-12">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight">Seamless integrations</h2>
          <p className="mt-2 text-sm text-muted-foreground">Connect your tools in clicks—no custom code required.</p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {integrations.map((name) => (
            <div key={name} className="flex h-12 items-center justify-center rounded border bg-white text-sm font-semibold text-slate-600">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
