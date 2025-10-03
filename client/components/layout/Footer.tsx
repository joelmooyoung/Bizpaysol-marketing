import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">B</span>
            BizPaySol
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            ClearACH by BizPaySol — a cloud-based ACH platform and API for secure, compliant operations.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/product" className="hover:text-foreground">Features</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><Link to="/docs" className="hover:text-foreground">Developer Docs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About & Contact</Link></li>
            <li><Link to="/support" className="hover:text-foreground">Support</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Follow</h4>
          <div className="flex gap-3 text-muted-foreground">
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin /></a>
            <a href="#" aria-label="Twitter/X" className="hover:text-foreground"><Twitter /></a>
            <a href="#" aria-label="GitHub" className="hover:text-foreground"><Github /></a>
          </div>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} BizPaySol. All rights reserved.
      </div>
    </footer>
  );
}
