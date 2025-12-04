import { RequestHandler } from "express";

interface ConversationMessage {
  role: "user" | "assistant";
  content: string;
}

const GEMINI_API_KEY = process.env.GEMINI_API_KEY as string;

async function generateResponse(
  userMessage: string,
  conversationHistory: ConversationMessage[]
): Promise<string> {
  if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY not configured");
  }

  const systemPrompt = `You are a friendly customer support assistant for BizPay Solutions, an ACH payment platform.

Help customers with questions about:
- ACH payments and transfers
- Pricing and plans  
- Integration and APIs
- Security and compliance
- Getting started

Instructions:
1. Be helpful, concise, and friendly
2. If unsure, suggest contacting support@bizpaysol.com
3. Keep responses under 150 words`;

  const messages = [
    ...conversationHistory.slice(-5), // Keep last 5 messages for context
    { role: "user" as const, content: userMessage },
  ];

  const payload = {
    model: "gemini-1.5-flash",
    system_instruction: {
      parts: [{ text: systemPrompt }],
    },
    contents: messages.map((msg) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    })),
  };

  const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.text();
    console.error(`Gemini API error: ${res.status} ${error}`);
    throw new Error(`Gemini API error: ${res.status}`);
  }

  const data = await res.json();
  const text =
    data?.candidates?.[0]?.content?.parts?.map((p: any) => p.text).join("") ||
    "";

  if (!text.trim()) {
    throw new Error("Empty response from Gemini");
  }

  return text.trim();
}

export const handleChat: RequestHandler = async (req, res) => {
  try {
    console.log("Chat request received:", req.method);

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const userMessage = req.body.message as string;
    const conversationHistory = (req.body.conversationHistory ||
      []) as ConversationMessage[];

    if (!userMessage || typeof userMessage !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    console.log("User message:", userMessage.substring(0, 50));

    if (!GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not set");
      return res
        .status(500)
        .json({ error: "Server configuration error" });
    }

    const reply = await generateResponse(userMessage, conversationHistory);

    return res.json({ reply });
  } catch (error: any) {
    console.error(
      "Chat handler error:",
      error instanceof Error ? error.message : String(error)
    );
    console.error("Full error:", error);
    return res.status(500).json({
      error: error?.message || "Internal server error",
      details: process.env.NODE_ENV === "development" ? String(error) : undefined,
    });
  }
};
