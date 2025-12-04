import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Security headers (serverless functions do not inherit netlify.toml headers)
  app.use((_, res, next) => {
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader(
      "Permissions-Policy",
      "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
    );
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Resource-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "credentialless");
    res.setHeader(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
    );
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'self'; base-uri 'self' https://window-2.botpenguin.com https://window.botpenguin.com; frame-ancestors 'none'; form-action 'self'; script-src 'self' 'unsafe-inline' https://cdn.botpenguin.com; style-src 'self' 'unsafe-inline' https://cdn.botpenguin.com; img-src 'self' data: blob: https:; font-src 'self' data: https:; connect-src 'self' https: wss:; frame-src 'self' https://window-2.botpenguin.com https://window.botpenguin.com https://cdn.botpenguin.com; object-src 'none'",
    );
    next();
  });

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.post("/api/rag-answer", async (req, res) => {
    try {
      const question = String(req.body?.question || "");
      if (!question)
        return res.status(400).json({ error: "question required" });
      const endpoint =
        process.env.RAG_ENDPOINT ||
        "https://www.bizpaysol.com/.netlify/functions/rag?action=answer";
      const r = await fetch(endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const contentType = r.headers.get("content-type") || "";
      let responseBody: any;

      if (contentType.includes("application/json")) {
        try {
          responseBody = await r.json();
        } catch {
          const txt = await r.text();
          try {
            responseBody = JSON.parse(txt);
          } catch {
            responseBody = { error: txt };
          }
        }
      } else {
        const txt = await r.text();
        try {
          responseBody = JSON.parse(txt);
        } catch {
          responseBody = { error: txt };
        }
      }

      res.status(r.status).json(responseBody);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  app.post("/api/rag-ingest", async (req, res) => {
    try {
      const endpointBase =
        process.env.RAG_ENDPOINT_BASE ||
        "https://www.bizpaysol.com/.netlify/functions/rag";
      const url = `${endpointBase}?action=ingest`;
      const headers: Record<string, string> = {
        "content-type": "application/json",
      };
      const auth = req.headers["authorization"] || req.headers["x-admin-token"];
      if (typeof auth === "string" && auth) headers["authorization"] = auth;

      const r = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(req.body || {}),
      });

      const contentType = r.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const j = await r.json().catch(async () => {
          const t = await r.text();
          try {
            return JSON.parse(t);
          } catch {
            return { error: t };
          }
        });
        return res.status(r.status).json(j);
      }
      const t = await r.text();
      try {
        const j = JSON.parse(t);
        return res.status(r.status).json(j);
      } catch {
        return res.status(r.status).json({ data: t });
      }
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  });

  return app;
}
