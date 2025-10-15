import Layout from "@/components/layout/Layout";

export default function Security() {
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight">Security & Compliance</h1>
          <p className="mt-3 text-muted-foreground">Enterprise‑grade controls, transparent posture, and continuous improvement.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Certifications</h2>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                <li>SOC 2 Type II</li>
                <li>NACHA compliant ACH operations</li>
                <li>ISO 27001 aligned controls</li>
                <li>GDPR alignment for applicable data</li>
                <li>OWASP ZAP DAST scans (Oct 2025) with all critical/high resolved</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Transport & Data</h2>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                <li>TLS 1.2+ only with HSTS (includeSubDomains; preload)</li>
                <li>Encryption in transit and at rest (AES‑256 at rest)</li>
                <li>Signed webhooks with replay protection (HMAC)</li>
                <li>Tokenized bank data; secrets never logged</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Application Security</h2>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                <li>Security headers: CSP, HSTS, COEP/COOP/CORP, Referrer‑Policy, Permissions‑Policy</li>
                <li>Role‑based access, audit trails, account lockout protection</li>
                <li>Scrypt + Bcrypt password hashing</li>
                <li>Automated dependency and bundle scanning in CI</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">Availability</h2>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                <li>Target 99.95% uptime</li>
                <li>Global edge delivery and redundancy</li>
                <li>Incident response and status updates</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <a href="/support#contact" className="text-sm font-medium text-primary">Request Security Package</a>
            <a href="/docs" className="text-sm text-muted-foreground hover:text-foreground">View API Documentation →</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
