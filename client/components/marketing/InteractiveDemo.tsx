import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, CreditCard, Users, Workflow } from "lucide-react";

const steps = [
  {
    icon: Workflow,
    title: "Create API Key",
    desc: "Spin up in seconds with test credentials.",
  },
  {
    icon: Users,
    title: "Create Customer",
    desc: "Tokenize bank accounts with Plaid/route & account.",
  },
  {
    icon: CreditCard,
    title: "Send First ACH",
    desc: "Initiate a debit/credit with one POST.",
  },
  {
    icon: CheckCircle2,
    title: "Live in < 5 min",
    desc: "Webhooks & idempotency built‑in.",
  },
];

export function InteractiveDemo() {
  const [index, setIndex] = useState(0);
  const current = useMemo(() => steps[index % steps.length], [index]);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % steps.length), 3500);
    return () => clearInterval(t);
  }, []);

  const images = [
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2F9a930541b2654097be9377fff1612aa0%2Fff4c7749a9c74bcbab65e20a854c5547?format=webp&width=800",
      alt: "Obtaining a security key for transmission",
    },
    {
      url: "https://images.pexels.com/photos/29221981/pexels-photo-29221981.jpeg",
      alt: "Customer profile creation",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2F9a930541b2654097be9377fff1612aa0%2F11fe6c62adbf4b3f9f91232e3cb1e53d?format=webp&width=800",
      alt: "Customer's first ACH transaction",
    },
    {
      url: "https://cdn.builder.io/api/v1/image/assets%2F9a930541b2654097be9377fff1612aa0%2Fd5c1b4dd360f403485885132f5616e8a?format=webp&width=800",
      alt: "Fast setup and successful transmission – ACH success",
    },
  ];

  return (
    <div className="rounded-xl border bg-white p-6 shadow-xl">
      <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />{" "}
        Live demo
      </div>
      <div className="grid gap-4">
        <div className="overflow-hidden rounded-lg border bg-slate-50">
          <img
            src={images[index % images.length].url}
            alt={images[index % images.length].alt}
            loading="lazy"
            className="h-44 w-full object-cover transition-opacity duration-500"
          />
        </div>

        <div className="flex items-center gap-3">
          <current.icon className="h-6 w-6 text-primary" />
          <div>
            <div className="font-semibold">{current.title}</div>
            <div className="text-sm text-muted-foreground">{current.desc}</div>
          </div>
        </div>
        <div className="mt-2 h-2 w-full rounded bg-slate-100">
          <div
            className="h-2 rounded bg-primary transition-all"
            style={{
              width: `${((index % steps.length) + 1) * (100 / steps.length)}%`,
            }}
          />
        </div>
        <div className="mt-2 grid grid-cols-4 gap-2 text-center text-xs">
          {steps.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setIndex(i)}
              className={`rounded border px-2 py-1 ${i === index ? "border-primary text-primary" : "text-muted-foreground hover:border-slate-300"}`}
              aria-pressed={i === index}
              aria-label={`Go to step ${i + 1}: ${s.title}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
