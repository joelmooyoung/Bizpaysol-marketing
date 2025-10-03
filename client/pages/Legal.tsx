import Layout from "@/components/layout/Layout";

export function Terms() {
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container max-w-3xl">
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground">Standard terms placeholder. Replace with your legal copy.</p>
        </div>
      </section>
    </Layout>
  );
}

export function Privacy() {
  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container max-w-3xl">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">Standard privacy placeholder. Replace with your legal copy.</p>
        </div>
      </section>
    </Layout>
  );
}
