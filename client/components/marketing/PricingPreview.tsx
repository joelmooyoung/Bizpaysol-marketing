import { Link } from "react-router-dom";

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="h-5 w-5 text-primary mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export function PricingPreview() {
  return (
    <section className="bg-slate-50 py-12 border-t">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">
            Transparent, Predictable Pricing
          </h2>
          <p className="text-muted-foreground mt-2">
            Save 30-65% vs legacy providers. No hidden fees. Volume discounts available. First month free on annual plans.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Starter Tier */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-primary mb-2">
              Starter
            </div>
            <div className="text-3xl font-bold mb-1">0.8%</div>
            <div className="text-sm text-muted-foreground mb-4">
              per ACH transaction
            </div>
            <ul className="space-y-2 text-sm mb-6">
              <li className="flex items-start gap-2">
                <CheckIcon />
                Up to $50k monthly volume
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Standard API access
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Email support (24hr response)
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                No setup fees
              </li>
            </ul>
            <Link
              to="/pricing"
              className="inline-flex w-full items-center justify-center rounded-md border border-input bg-background hover:bg-accent h-10"
            >
              Get Started
            </Link>
          </div>

          {/* Growth Tier */}
          <div className="rounded-xl border-2 border-primary bg-white p-6 shadow-lg relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
              MOST POPULAR
            </div>
            <div className="text-sm font-semibold text-primary mb-2">
              Growth
            </div>
            <div className="text-3xl font-bold mb-1">0.5%</div>
            <div className="text-sm text-muted-foreground mb-4">
              per ACH transaction
            </div>
            <ul className="space-y-2 text-sm mb-6">
              <li className="flex items-start gap-2">
                <CheckIcon />
                $50k - $500k monthly volume
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Priority API access
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Phone + email support (4hr response)
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Advanced webhooks & reporting
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Free migration assistance
              </li>
            </ul>
            <Link
              to="/pricing"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-10"
            >
              Get Started
            </Link>
          </div>

          {/* Enterprise Tier */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-primary mb-2">
              Enterprise
            </div>
            <div className="text-3xl font-bold mb-1">Custom</div>
            <div className="text-sm text-muted-foreground mb-4">
              volume-based pricing
            </div>
            <ul className="space-y-2 text-sm mb-6">
              <li className="flex items-start gap-2">
                <CheckIcon />
                $500k+ monthly volume
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Dedicated infrastructure
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                24/7 dedicated support team
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Custom SLA & integrations
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                White-glove onboarding
              </li>
            </ul>
            <Link
              to="/support#contact"
              className="inline-flex w-full items-center justify-center rounded-md border border-input bg-background hover:bg-accent h-10"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>
            All plans include: NACHA compliance • Real-time reconciliation •
            Retry logic • Webhook notifications
          </p>
          <Link
            to="/pricing"
            className="text-primary hover:underline mt-2 inline-block"
          >
            View detailed pricing comparison →
          </Link>
        </div>
      </div>
    </section>
  );
}
