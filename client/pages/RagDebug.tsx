import Layout from "@/components/layout/Layout";
import { useState } from "react";
import Layout from "@/components/layout/Layout";

export default function RagDebug() {
  const [q, setQ] = useState("What is ACH?");
  const [resText, setResText] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    setLoading(true);
    setResText("");
    try {
      const res = await fetch("/api/rag-answer", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ question: q }),
      });
      const ct = res.headers.get("content-type") || "";
      let data: any;
      if (ct.includes("application/json")) {
        try {
          data = await res.json();
        } catch {
          const txt = await res.text();
          try {
            data = JSON.parse(txt);
          } catch {
            data = { error: txt };
          }
        }
      } else {
        const txt = await res.text();
        try {
          data = JSON.parse(txt);
        } catch {
          data = { error: txt };
        }
      }
      setResText(JSON.stringify({ status: res.status, data }, null, 2));
    } catch (e: any) {
      setResText(`error: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container py-12 space-y-4">
        <h1 className="text-2xl font-semibold">RAG Debug</h1>
        <div className="flex gap-2">
          <input
            className="w-full rounded-md border px-3 py-2"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <button
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
            onClick={ask}
            disabled={loading}
          >
            {loading ? "Asking..." : "Ask"}
          </button>
        </div>
        <pre className="whitespace-pre-wrap rounded-md border p-4 text-xs max-h-[60vh] overflow-auto">
          {resText}
        </pre>
      </div>
    </Layout>
  );
}
