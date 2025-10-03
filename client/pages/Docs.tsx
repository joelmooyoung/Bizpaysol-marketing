import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";

const sections = [
  "Getting Started",
  "Authentication",
  "API Endpoints",
  "Webhooks",
  "Error Codes",
  "SDK Downloads",
];

export default function Docs() {
  return (
    <Layout>
      <section className="bg-white py-12">
        <div className="container grid gap-8 md:grid-cols-[260px_1fr]">
          <aside className="space-y-4">
            <h1 className="text-2xl font-bold">ClearACH Developer Docs</h1>
            <Input placeholder="Search docs..." className="w-full" />
            <nav className="mt-4 space-y-2">
              {sections.map((s) => (
                <div key={s} className="text-sm text-muted-foreground">{s}</div>
              ))}
            </nav>
          </aside>
          <div>
            <h2 className="text-xl font-semibold">Welcome</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Everything you need to integrate with ClearACH APIs in minutes. Ask to expand this documentation page with full content.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
