import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { setPageMeta, setStructuredData } from "@/lib/seo";

export default function About() {
  useEffect(() => {
    setPageMeta({
      title: "About BizPay Solutions - ACH Payment Platform for Fintech",
      description: "Learn about BizPaySol's mission to simplify ACH payments. Trusted by 2000+ businesses, processing 50k+ ACH transfers with 99.95% uptime.",
      canonicalUrl: "https://www.bizpaysol.com/about/",
      keywords: "BizPaySol, ACH platform, fintech company, payment processor, about us",
      ogTitle: "About BizPaySol - Our Mission",
      ogDescription: "ACH payments should be simple, safe, and in full compliance. Meet the team behind BizPaySol."
    });

    setStructuredData({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "BizPaySol",
      "url": "https://www.bizpaysol.com/",
      "description": "Enterprise ACH payment platform for fintech and B2B companies",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1234 Market Street, Suite 500",
        "addressLocality": "Atlanta",
        "addressRegion": "GA",
        "postalCode": "30303",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "support@bizpaysol.com",
        "telephone": "(555) 123-4567"
      }
    });
  }, []);
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight">Our Mission.</h1>
          <p className="mt-4 text-muted-foreground">
            At Enterprise ACH, we believe transactions shouldn’t be complex or risky. We provide fintechs and enterprises with the tools to manage ACH transactions safely, efficiently, and in full compliance.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold">Team</h2>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="h-24 rounded-md border bg-secondary" />
                <div className="h-24 rounded-md border bg-secondary" />
                <div className="h-24 rounded-md border bg-secondary" />
                <div className="h-24 rounded-md border bg-secondary" />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Contact</h2>
              <div className="mt-3 text-sm text-muted-foreground">
                <p>Email: <a href="mailto:info@bizpaysol.com" className="underline decoration-dotted">info@bizpaysol.com</a></p>
                <p>Sales: <a href="mailto:sales@bizpaysol.com" className="underline decoration-dotted">sales@bizpaysol.com</a></p>
                <p>Support: <a href="mailto:support@bizpaysol.com" className="underline decoration-dotted">support@bizpaysol.com</a></p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 1234 Market Street, Suite 500, Atlanta, GA</p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">2025 Vision</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Build the simplest, most reliable ACH platform for SMBs and developers. Human support, developer‑first APIs, and compliance without the bloat.
              </p>
              <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground">
                <li>Helped 2,000+ businesses move money securely</li>
                <li>50k+ ACH transfers processed</li>
                <li>99.95% uptime over the last 12 months</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Meet the Founder</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                "We built BizPaySol to cut through complexity. Modern ACH should be fast, clear, and secure—period."
              </p>
              <p className="mt-4 text-xs text-muted-foreground">Want to add a 1‑minute vision video? Share a public video URL and we\'ll embed it here.</p>
            </div>
          </div>
        </div>

        <div className="container max-w-4xl mt-12">
          <h2 className="text-2xl font-bold tracking-tight">Blog Strategy</h2>
          <p className="mt-2 text-sm text-muted-foreground">Educate CFOs, developers, and compliance leaders on ACH, risk, and industry use cases.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Educational Deep Dives</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                <li>ACH 101 for CFOs: Costs, timing, returns, and risk vs cards/wires</li>
                <li>NACHA Return Codes Explained (R01–R10, R29)</li>
                <li>Same Day ACH: When it makes sense and how to price it</li>
                <li>Bank Verification: Instant vs micro‑deposits—fraud, UX, ops trade‑offs</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Compliance & Risk</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                <li>SEC Codes (PPD, CCD, WEB, TEL): Choosing the right one</li>
                <li>OFAC screening and sanctions workflows</li>
                <li>Building a SOC 2 Type II‑ready payments stack</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Industry Use Cases</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                <li>Property Management: Rent collections and reconciliation</li>
                <li>Healthcare: Co‑pays, refunds, and PHI considerations</li>
                <li>Logistics: High‑ticket invoicing and DSO reduction</li>
                <li>B2B SaaS: Subscription ACH and involuntary churn prevention</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Formats & SEO</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                <li>Pillar pages, tactical playbooks, and a glossary (NACHA, SEC, ODFI/RDFI)</li>
                <li>Comparison posts (ACH vs wires/cards)</li>
                <li>Downloadable checklists and ROI calculators</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
