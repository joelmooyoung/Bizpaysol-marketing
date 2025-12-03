import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "CFO",
    role: "Mid‑Market Logistics",
    quote: "We cut payment costs by 68% and DSO by 7 days.",
  },
  {
    name: "VP Engineering",
    role: "B2B SaaS",
    quote: "Fast, clean APIs; we went live in under two weeks.",
  },
  {
    name: "Director of AR",
    role: "Healthcare Group",
    quote: "Automated return handling reduced manual exceptions by 80%.",
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
            <li><span className="font-semibold text-slate-700">68% lower</span> payment processing costs</li>
            <li><span className="font-semibold text-slate-700">7 days faster</span> DSO on average</li>
            <li><span className="font-semibold text-slate-700">80% fewer</span> manual exceptions via automation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
