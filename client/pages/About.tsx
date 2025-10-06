import Layout from "@/components/layout/Layout";

export default function About() {
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
      </section>
    </Layout>
  );
}
