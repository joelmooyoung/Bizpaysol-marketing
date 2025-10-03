import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/product", label: "Product" },
  { to: "/pricing", label: "Pricing" },
  { to: "/docs", label: "Docs" },
  { to: "/support", label: "Support" },
  { to: "/about", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition backdrop-blur",
        scrolled ? "bg-white/80 border-border shadow-sm" : "bg-white/60 border-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
            B
          </span>
          <div className="leading-tight">
            <div className="flex items-baseline gap-2">
              <span className="font-extrabold text-lg tracking-tight text-foreground">BizPaySol</span>
              <span className="hidden text-sm font-semibold text-muted-foreground md:inline">Enterprise ACH</span>
            </div>
            <span className="hidden text-[11px] text-muted-foreground md:block">
              Powered by Enterprise Payment Solutions
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium text-muted-foreground hover:text-foreground",
                  isActive && "text-foreground",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="ghost">
            <Link to="/support#contact">Request a Demo</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/pricing">Get Started</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="container flex flex-col gap-2 py-3">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="py-1 text-sm" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Button asChild variant="ghost" className="flex-1">
                <Link to="/support#contact" onClick={() => setOpen(false)}>
                  Request a Demo
                </Link>
              </Button>
              <Button asChild className="flex-1">
                <Link to="/pricing" onClick={() => setOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
