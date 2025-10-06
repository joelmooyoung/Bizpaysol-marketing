import { Link, useLocation } from "react-router-dom";

const steps = [
  { label: "Explore", href: "/" },
  { label: "Calc", href: "/pricing" },
  { label: "Trial", href: "/support#contact" },
];

export function StickyFunnelBar() {
  const { pathname } = useLocation();
  return (
    <div className="sticky top-16 z-40 border-b bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-center gap-6 py-2 text-xs">
        {steps.map((s, i) => {
          const active = pathname === s.href || (s.href.startsWith("/support") && pathname === "/support") || (s.href.startsWith("/pricing") && pathname === "/pricing");
          return (
            <div key={s.href} className="flex items-center gap-2">
              <Link to={s.href} className={`font-semibold ${active ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>{`Step ${i + 1}: ${s.label}`}</Link>
              {i < steps.length - 1 && <span className="text-muted-foreground">→</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
