import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const routeBreadcrumbs: Record<string, BreadcrumbItem[]> = {
  "/": [{ label: "Home" }],
  "/product": [
    { label: "Home", href: "/" },
    { label: "Product" },
  ],
  "/pricing": [
    { label: "Home", href: "/" },
    { label: "Pricing" },
  ],
  "/docs": [
    { label: "Home", href: "/" },
    { label: "Documentation" },
  ],
  "/support": [
    { label: "Home", href: "/" },
    { label: "Support" },
  ],
  "/about": [
    { label: "Home", href: "/" },
    { label: "About" },
  ],
  "/case-studies": [
    { label: "Home", href: "/" },
    { label: "Case Studies" },
  ],
  "/security": [
    { label: "Home", href: "/" },
    { label: "Security & Compliance" },
  ],
  "/compare/stripe-ach": [
    { label: "Home", href: "/" },
    { label: "Compare", href: "/" },
    { label: "BizPay vs Stripe" },
  ],
  "/compare/dwolla": [
    { label: "Home", href: "/" },
    { label: "Compare", href: "/" },
    { label: "BizPay vs Dwolla" },
  ],
  "/compare/modern-treasury": [
    { label: "Home", href: "/" },
    { label: "Compare", href: "/" },
    { label: "BizPay vs Modern Treasury" },
  ],
  "/compare/gocardless": [
    { label: "Home", href: "/" },
    { label: "Compare", href: "/" },
    { label: "BizPay vs GoCardless" },
  ],
};

export function Breadcrumbs() {
  const location = useLocation();
  const breadcrumbs = routeBreadcrumbs[location.pathname] || [{ label: "Page" }];

  return (
    <nav aria-label="Breadcrumb" className="border-b bg-slate-50/50 py-3">
      <div className="container">
        <ol className="flex items-center gap-1 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              {item.href ? (
                <Link
                  to={item.href}
                  className="text-primary hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-muted-foreground">{item.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
