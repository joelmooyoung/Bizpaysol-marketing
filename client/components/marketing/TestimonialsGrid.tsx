export function TestimonialsGrid() {
  const Star = () => (
    <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20" aria-hidden>
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
  );

  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Trusted by Finance Teams at Growing Companies
          </h2>
          <p className="mt-2 text-muted-foreground">
            See how businesses like yours save money and time with BizPaySol
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div
              className="mb-4 flex gap-1 text-yellow-500"
              aria-label="5 star rating"
            >
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <blockquote className="text-base mb-4">
              "We cut our payment processing costs by{" "}
              <strong>$12,400 per month</strong> after switching from Stripe.
              The migration took just 9 days and their API is actually easier to
              work with."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                SC
              </div>
              <div>
                <div className="font-semibold text-sm">Sarah Chen</div>
                <div className="text-xs text-muted-foreground">
                  VP Engineering, CloudMetrics
                </div>
                <div className="text-xs text-muted-foreground">
                  SaaS • $8M ARR • 450 customers
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Monthly volume:</span>
                <span className="font-semibold">$180k</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>Time to go live:</span>
                <span className="font-semibold">9 days</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="rounded-xl border-2 border-primary bg-white p-6 shadow-lg">
            <div
              className="mb-4 flex gap-1 text-yellow-500"
              aria-label="5 star rating"
            >
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <blockquote className="text-base mb-4">
              "Our failed payment rate dropped from{" "}
              <strong>4.2% to 0.7%</strong> thanks to BizPaySol's intelligent
              retry logic. That's $89k in recovered revenue annually. The ROI
              was immediate."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                MR
              </div>
              <div>
                <div className="font-semibold text-sm">Michael Rodriguez</div>
                <div className="text-xs text-muted-foreground">
                  CFO, FleetSync Pro
                </div>
                <div className="text-xs text-muted-foreground">
                  Logistics Tech • $15M ARR • 1,200 customers
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Monthly volume:</span>
                <span className="font-semibold">$425k</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>Failed payment reduction:</span>
                <span className="font-semibold text-emerald-600">83% ↓</span>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div
              className="mb-4 flex gap-1 text-yellow-500"
              aria-label="5 star rating"
            >
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <blockquote className="text-base mb-4">
              "As a fintech ourselves, we needed enterprise-grade compliance and
              performance. BizPaySol delivers both at{" "}
              <strong>1/3 the cost</strong> of what we were paying before. Their
              support team is incredible."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                JP
              </div>
              <div>
                <div className="font-semibold text-sm">Jennifer Park</div>
                <div className="text-xs text-muted-foreground">
                  Head of Product, PayFlow
                </div>
                <div className="text-xs text-muted-foreground">
                  Fintech • $22M ARR • 3,500 customers
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Monthly volume:</span>
                <span className="font-semibold">$1.2M</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>Support response time:</span>
                <span className="font-semibold">&lt; 2 hours</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <h3 className="text-xl font-semibold mb-4">More Success Stories</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border p-4 bg-slate-50">
              <div className="flex gap-1 text-yellow-500 mb-2">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="text-sm font-medium mb-3">RecurlyPay's payment success rate improved from 87% to 96% in 3 months.</p>
              <p className="text-xs text-muted-foreground">API + Webhooks were the game changer.</p>
            </div>
            <div className="rounded-lg border p-4 bg-slate-50">
              <div className="flex gap-1 text-yellow-500 mb-2">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="text-sm font-medium mb-3">Invoiceish cut their payment processing time from 8 days to 1 day.</p>
              <p className="text-xs text-muted-foreground">Webhook automation eliminated manual work.</p>
            </div>
            <div className="rounded-lg border p-4 bg-slate-50">
              <div className="flex gap-1 text-yellow-500 mb-2">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="text-sm font-medium mb-3">TalentFlow reduced vendor payment costs by 38% year-over-year.</p>
              <p className="text-xs text-muted-foreground">No more wire fees. Same-day ACH works great.</p>
            </div>
            <div className="rounded-lg border p-4 bg-slate-50">
              <div className="flex gap-1 text-yellow-500 mb-2">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <p className="text-sm font-medium mb-3">Marketplace Pro scaled from 500 to 5,000 daily payouts.</p>
              <p className="text-xs text-muted-foreground">Zero duplicate transfers thanks to idempotency.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/case-studies"
            className="inline-flex items-center text-primary hover:underline font-semibold"
          >
            Read full case studies →
          </a>
        </div>
      </div>
    </section>
  );
}
