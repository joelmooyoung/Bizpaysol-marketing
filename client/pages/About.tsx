import Layout from "@/components/layout/Layout";

export default function About() {
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight">Our Mission.</h1>
          <p className="mt-4 text-muted-foreground">
            At ClearACH, we believe project cessation shouldn’t be complex or risky. We provide fintechs and enterprises with the tools to close ACH projects safely, efficiently, and in full compliance.
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
                <p>Email: info@clearach.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 1234 Market Street, Suite 500, Atlanta, GA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
