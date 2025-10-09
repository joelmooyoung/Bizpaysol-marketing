import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export function TrustBar() {
  return (
    <div className="border-t bg-white/80 py-5 backdrop-blur">
      <div className="container space-y-2 text-center">
        <div className="text-sm font-semibold">Enterprise-Grade Financial Compliance, Built for Scale.</div>
        <div className="text-xs text-muted-foreground">99.95% Uptime • ~1.5s API response (global)</div>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
          <Badge className="bg-white">SOC 2 Type II</Badge>
          <Badge className="bg-white">NACHA Compliant</Badge>
          <Badge className="bg-white">ISO 27001</Badge>
          <Badge className="bg-white">GDPR</Badge>
          <Badge className="bg-white">TLS 1.2+</Badge>
          <Badge className="bg-white">OFAC Screening</Badge>
        </div>
        <div className="text-xs">
          <Link to="/security" className="text-primary underline decoration-dotted underline-offset-2">View security details →</Link>
        </div>
      </div>
    </div>
  );
}
