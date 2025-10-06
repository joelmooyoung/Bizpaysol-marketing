import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Hero } from "@/components/marketing/Hero";
import { TrustBar } from "@/components/marketing/TrustBar";
import { TestimonialsCarousel } from "@/components/marketing/TestimonialsCarousel";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";
import { IntegrationsTeaser } from "@/components/marketing/IntegrationsTeaser";

export default function Index() {
  return (
    <Layout>
      <Hero />
      <TrustBar />

      <TestimonialsCarousel />
      <ComparisonTable />
      <IntegrationsTeaser />

      {/* CTA band */}
      <section className="border-t bg-gradient-to-r from-blue-600 to-sky-500 py-14 text-white">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h3 className="text-2xl font-bold">Ready to move faster with ACH?</h3>
            <p className="text-sm text-white/80">Start with our API in minutes or talk to our team.</p>
          </div>
          <div className="flex gap-3">
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
              <Link to="/pricing">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/support#contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
