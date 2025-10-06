import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { PricingCalculator } from "@/components/pricing/PricingCalculator";
import { MigrationImport } from "@/components/pricing/MigrationImport";

export default function Pricing() {
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container">
          {(() => {
            const key = "pricing_promo_variant";
            const saved = typeof window !== "undefined" ? localStorage.getItem(key) : null;
            const variant = saved ?? (Math.random() < 0.5 ? "free-month" : "migration-help");
            if (!saved && typeof window !== "undefined") localStorage.setItem(key, variant);
            return (
              <div className="mb-4 rounded-md border bg-slate-50 p-3 text-sm">
                {variant === "free-month" ? (
                  <span><strong>Promo:</strong> Get your first month free on annual plans.</span>
                ) : (
                  <span><strong>Promo:</strong> Free white-glove migration from Gusto/Stripe this month.</span>
                )}
              </div>
            );
          })()}
          <h1 className="text-4xl font-extrabold tracking-tight">Simple, Transparent Pricing.</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            ACH-first plans for builders. Estimate savings and migrate in minutes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg"><a href="/support#contact">Get Started</a></Button>
            <Button asChild size="lg" variant="outline"><a href="mailto:sales@bizpaysol.com">Contact Sales</a></Button>
            <MigrationImport />
          </div>

          <PricingCalculator />
        </div>
      </section>
    </Layout>
  );
}
