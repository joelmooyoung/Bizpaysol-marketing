import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { PricingCalculator } from "@/components/pricing/PricingCalculator";
import { MigrationImport } from "@/components/pricing/MigrationImport";

export default function Pricing() {
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container">
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
