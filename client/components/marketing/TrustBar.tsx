import { Badge } from "@/components/ui/badge";

export function TrustBar() {
  return (
    <div className="border-t bg-white/80 py-4 backdrop-blur">
      <div className="container space-y-3">
        <div className="text-center text-xs font-medium text-muted-foreground">
          Trusted by finance, logistics, healthcare, and SaaS leaders
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Badge className="bg-white">NACHA Compliant</Badge>
          <Badge className="bg-white">SOC 2 Type II</Badge>
          <Badge className="bg-white">ISO 27001</Badge>
          <Badge className="bg-white">GDPR</Badge>
          <Badge className="bg-white">TLS 1.2+</Badge>
          <Badge className="bg-white">Encryption at Rest & In Transit</Badge>
          <Badge className="bg-white">OFAC Screening</Badge>
        </div>
      </div>
    </div>
  );
}
