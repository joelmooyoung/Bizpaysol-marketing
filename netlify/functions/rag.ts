// Minimal Netlify Function for RAG ingest and answer
// Endpoints:
//  - POST /.netlify/functions/rag?action=ingest { urls?: string[], texts?: Array<{url?: string,title?: string, content: string}> }
//  - POST /.netlify/functions/rag?action=answer { question: string, matchCount?: number }

const SUPABASE_URL = process.env.SUPABASE_URL as string;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY as string;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY as string;

function json(statusCode: number, obj: any) {
  return {
    statusCode,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(obj),
  };
}

async function embed(text: string): Promise<number[]> {
  const payload = {
    model: "text-embedding-004",
    content: { parts: [{ text }] },
  };
  const urls = [
    `https://generativelanguage.googleapis.com/v1/models/text-embedding-004:embedContent?key=${GEMINI_API_KEY}`,
    `https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent?key=${GEMINI_API_KEY}`,
  ];
  let lastErr = "";
  for (const url of urls) {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      const data = await res.json();
      return data?.embedding?.values || data?.data?.[0]?.embedding || [];
    }
    const t = await res.text().catch(() => "");
    lastErr = `${res.status} ${t}`;
    if (res.status !== 404) break;
  }
  throw new Error(`Gemini embed failed: ${lastErr}`);
}

function chunk(text: string, size = 1500) {
  const chunks: string[] = [];
  let i = 0;
  while (i < text.length) {
    chunks.push(text.slice(i, i + size));
    i += size;
  }
  return chunks;
}

async function supabaseInsert(rows: any[]) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rag.documents`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "content-type": "application/json",
      Prefer: "resolution=merge-duplicates",
    },
    body: JSON.stringify(rows),
  });
  if (!res.ok) throw new Error(`Supabase insert failed: ${await res.text()}`);
}

async function supabaseRPCMatch(queryEmbedding: number[], matchCount = 5) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/match_documents`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query_embedding: queryEmbedding,
      match_count: matchCount,
    }),
  });
  if (!res.ok) throw new Error(`Supabase match failed: ${await res.text()}`);
  return res.json();
}

async function listModels(): Promise<any[]> {
  const endpoints = [
    `https://generativelanguage.googleapis.com/v1/models?key=${GEMINI_API_KEY}`,
    `https://generativelanguage.googleapis.com/v1beta/models?key=${GEMINI_API_KEY}`,
  ];
  for (const url of endpoints) {
    const r = await fetch(url);
    if (r.ok) {
      const j = await r.json().catch(() => ({}));
      return Array.isArray(j.models) ? j.models : [];
    }
  }
  return [];
}

async function pickGenerateModel(): Promise<string> {
  const models = await listModels();
  if (!models.length) return "";
  const supportsGen = (m: any) =>
    Array.isArray(m.supported_generation_methods) &&
    m.supported_generation_methods.includes("generateContent");
  const byName = (substr: string) =>
    models.find(
      (m: any) =>
        typeof m.name === "string" && m.name.includes(substr) && supportsGen(m),
    )?.name;
  return (
    byName("gemini-1.5-flash-latest") ||
    byName("gemini-1.5-flash-8b") ||
    byName("gemini-1.5-flash") ||
    byName("gemini-1.5-pro-latest") ||
    byName("gemini-1.5-pro") ||
    models.find(supportsGen)?.name ||
    ""
  );
}

async function generateAnswer(
  question: string,
  contexts: { content: string; url?: string; title?: string }[],
) {
  const contextText = contexts
    .map(
      (c, i) =>
        `Source ${i + 1}${c.title ? `: ${c.title}` : ""}${c.url ? `\n${c.url}` : ""}\n${c.content}`,
    )
    .join("\n\n");
  const prompt = `You are BizPaySol's assistant. Answer using only the context below. If unsure, say you don't know.\n\nQUESTION:\n${question}\n\nCONTEXT:\n${contextText}`;

  const modelName = await pickGenerateModel();
  if (!modelName)
    throw new Error("No Gemini model available for generateContent");
  const url = `https://generativelanguage.googleapis.com/v1/${modelName}:generateContent?key=${GEMINI_API_KEY}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
  });
  if (!res.ok) {
    const t = await res.text().catch(() => "");
    throw new Error(`Gemini gen failed: ${res.status} ${t}`);
  }
  const data = await res.json();
  const text =
    data?.candidates?.[0]?.content?.parts?.map((p: any) => p.text).join("") ||
    "";
  return text.trim();
}

async function fetchUrl(url: string) {
  const res = await fetch(url);
  const html = await res.text();
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return { title: url, url, content: text.slice(0, 100000) };
}

export const handler = async (event: any) => {
  try {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !GEMINI_API_KEY) {
      return json(500, { error: "Missing env vars" });
    }
    if (event.httpMethod !== "POST")
      return json(405, { error: "Method not allowed" });
    const action = (event.queryStringParameters?.action || "answer") as
      | "ingest"
      | "answer";
    const body = event.body ? JSON.parse(event.body) : {};

    if (action === "ingest") {
      const items: { url?: string; title?: string; content: string }[] = [];
      const urls: string[] = Array.isArray(body.urls) ? body.urls : [];
      for (const u of urls) items.push(await fetchUrl(u));
      const texts = Array.isArray(body.texts) ? body.texts : [];
      for (const t of texts)
        items.push({ content: t.content, title: t.title, url: t.url });

      const rows: any[] = [];
      for (const it of items) {
        const parts = chunk(it.content, 1200);
        for (const part of parts) {
          const e = await embed(part);
          rows.push({
            url: it.url,
            title: it.title,
            content: part,
            embedding: e,
          });
        }
      }
      await supabaseInsert(rows);
      return json(200, { inserted: rows.length });
    }

    // answer
    const q = String(body.question || "").trim();
    if (!q) return json(400, { error: "question required" });
    const qe = await embed(q);
    const matches = await supabaseRPCMatch(
      qe,
      Math.min(8, Math.max(3, body.matchCount || 5)),
    );
    const answer = await generateAnswer(
      q,
      matches.map((m: any) => ({
        content: m.content,
        url: m.url,
        title: m.title,
      })),
    );
    return json(200, { answer, sources: matches });
  } catch (e: any) {
    return json(500, { error: e.message });
  }
};
