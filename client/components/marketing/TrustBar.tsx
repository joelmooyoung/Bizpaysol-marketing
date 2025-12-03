import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export function TrustBar() {
  return (
    <div className="border-t border-b bg-gradient-to-r from-blue-50 to-slate-50 py-8 backdrop-blur">
      <div className="container space-y-4 text-center">
        <div className="grid gap-4 md:grid-cols-3 text-center max-w-3xl mx-auto">
          <div>
            <p className="text-lg font-bold text-slate-900">2,000+</p>
            <p className="text-xs text-muted-foreground">Companies trust us</p>
          </div>
          <div>
            <p className="text-lg font-bold text-slate-900">99.95%</p>
            <p className="text-xs text-muted-foreground">Uptime SLA</p>
          </div>
          <div>
            <p className="text-lg font-bold text-slate-900">$50M+</p>
            <p className="text-xs text-muted-foreground">Processed annually</p>
          </div>
        </div>

        <div className="pt-4 border-t">
          <p className="text-xs text-muted-foreground mb-3 font-semibold">
            ENTERPRISE-GRADE COMPLIANCE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge className="bg-white border-slate-200">SOC 2 Type II</Badge>
            <Badge className="bg-white border-slate-200">NACHA Compliant</Badge>
            <Badge className="bg-white border-slate-200">ISO 27001</Badge>
            <Badge className="bg-white border-slate-200">GDPR</Badge>
            <Badge className="bg-white border-slate-200">TLS 1.2+</Badge>
            <Badge className="bg-white border-slate-200">OFAC Screening</Badge>
          </div>
        </div>

        <div className="text-xs pt-2">
          <Link
            to="/security"
            className="text-primary font-semibold underline decoration-dotted underline-offset-2 hover:no-underline"
          >
            View full security & compliance details →
          </Link>
        </div>
      </div>
    </div>
  );
}
