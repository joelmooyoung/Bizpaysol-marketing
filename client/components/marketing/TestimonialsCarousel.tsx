import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sarah Lin",
    role: "Freelancer",
    quote: "Cut my invoicing time by 70%. BizPaySol is the no-BS tool I needed.",
  },
  {
    name: "Omar Hassan",
    role: "Agency Owner",
    quote: "Payroll and payouts in minutes, not hours. My team loves it.",
  },
  {
    name: "Maya Patel",
    role: "Shop Founder",
    quote: "Setup took 5 minutes. The automation saves us every pay cycle.",
  },
];

export function TestimonialsCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];

  return (
    <section className="bg-white py-12">
      <div className="container grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Customers get results</h2>
          <p className="mt-2 text-sm text-muted-foreground">Real stories from SMBs using BizPaySol every day.</p>
          <div className="mt-6 rounded-lg border bg-white p-6 shadow-sm">
            <blockquote className="text-lg">“{t.quote}”</blockquote>
            <div className="mt-4 text-sm text-muted-foreground">{t.name} · {t.role}</div>
            <div className="mt-4 flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-2 w-6 rounded-full ${idx === i ? "bg-primary" : "bg-slate-200"}`}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-slate-50 p-6 text-sm text-muted-foreground">
          <ul className="space-y-3">
            <li><span className="font-semibold text-slate-700">70% faster</span> invoicing on average</li>
            <li><span className="font-semibold text-slate-700">under 5 min</span> to first ACH transfer</li>
            <li><span className="font-semibold text-slate-700">24/7</span> human support for paid plans</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
