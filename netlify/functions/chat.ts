// Chat API endpoint - handles user messages and generates responses using Gemini
const GEMINI_API_KEY = process.env.GEMINI_API_KEY as string;

interface ConversationMessage {
  role: "user" | "assistant";
  content: string;
}

// Default knowledge sources
const DEFAULT_SOURCES = [
  "https://www.bizpaysol.com/",
  "https://www.bizpaysol.com/product",
  "https://www.bizpaysol.com/pricing",
];

async function fetchUrlContent(url: string, timeout = 5000): Promise<string> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; BizPayBot/1.0)",
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`Failed to fetch ${url}: ${response.status}`);
      return "";
    }

    const html = await response.text();
    // Extract text content from HTML
    const text = html
      .replace(/<script[^>]*>.*?<\/script>/gi, "")
      .replace(/<style[^>]*>.*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    return text.substring(0, 2000); // Limit to 2000 chars
  } catch (error) {
    console.warn(`Error fetching ${url}:`, error instanceof Error ? error.message : String(error));
    return "";
  }
}
    console.error(`Failed to fetch ${url}:`, error);
    return "";
  }
}

async function generateResponse(
  userMessage: string,
  conversationHistory: ConversationMessage[]
): Promise<string> {
  if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY not configured");
  }

  // Fetch content from a few key sources only (to avoid timeouts)
  const sources = DEFAULT_SOURCES;
  let sourceContent = "";

  console.log("Fetching content from", sources.length, "sources");
  for (const url of sources) {
    try {
      const content = await fetchUrlContent(url);
      if (content) {
        sourceContent += `\n[Source: ${url}]\n${content}\n`;
      }
    } catch (err) {
      console.warn(`Skipped source ${url}`);
    }
  }

  const systemPrompt = `You are a friendly customer support assistant for BizPay Solutions, an ACH payment platform.

${sourceContent ? `KNOWLEDGE BASE:\n${sourceContent}` : ""}

Help customers with questions about:
- ACH payments and transfers
- Pricing and plans
- Integration and APIs
- Security and compliance
- Getting started

Instructions:
1. Be helpful, concise, and friendly
2. Reference information from the knowledge base when relevant
3. If unsure, suggest contacting support@bizpaysol.com
4. Keep responses under 150 words`;

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

  console.log("Calling Gemini API...");
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

export const handler = async (event: any) => {
  try {
    console.log("Chat request received:", event.httpMethod);

    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method not allowed" }),
      };
    }

    let body = {};
    try {
      body = event.body ? JSON.parse(event.body) : {};
    } catch (parseErr) {
      console.error("Failed to parse body:", parseErr);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid JSON in request body" }),
      };
    }

    const userMessage = body.message as string;
    const conversationHistory = (body.conversationHistory || []) as ConversationMessage[];

    if (!userMessage || typeof userMessage !== "string") {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Message is required" }),
      };
    }

    console.log("User message:", userMessage.substring(0, 50));

    if (!GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not set");
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Server configuration error" }),
      };
    }

    const reply = await generateResponse(userMessage, conversationHistory);

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ reply }),
    };
  } catch (error: any) {
    console.error("Chat handler error:", error instanceof Error ? error.message : String(error));
    console.error("Full error:", error);
    return {
      statusCode: 500,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        error: error?.message || "Internal server error",
        details: process.env.NODE_ENV === "development" ? String(error) : undefined,
      }),
    };
  }
};
