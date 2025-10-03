import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container">
          <h1 className="text-4xl font-extrabold tracking-tight">Simple, Transparent Pricing.</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Plans for every stage. Starter, Growth, and Enterprise. Ask to flesh this page out fully.
          </p>
          <div className="mt-8 flex gap-3">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">Contact Sales</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
