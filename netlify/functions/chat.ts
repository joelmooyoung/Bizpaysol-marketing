// Chat API endpoint - handles user messages and generates responses using Gemini
const GEMINI_API_KEY = process.env.GEMINI_API_KEY as string;

interface KnowledgeSource {
  url: string;
  title: string;
}

interface ConversationMessage {
  role: "user" | "assistant";
  content: string;
}

// Load knowledge sources from config
let knowledgeSources: KnowledgeSource[] = [];

async function loadKnowledgeSources(): Promise<KnowledgeSource[]> {
  if (knowledgeSources.length > 0) return knowledgeSources;

  try {
    // Try to load from environment variable first (for production)
    if (process.env.KNOWLEDGE_SOURCES) {
      knowledgeSources = JSON.parse(process.env.KNOWLEDGE_SOURCES).sources;
      console.log("Loaded knowledge sources from env:", knowledgeSources.length);
      return knowledgeSources;
    }

    // Fallback to default sources
    knowledgeSources = [
      {
        url: "https://www.bizpaysol.com/",
        title: "Homepage",
      },
      {
        url: "https://www.bizpaysol.com/product",
        title: "Product Page",
      },
      {
        url: "https://www.bizpaysol.com/pricing",
        title: "Pricing Page",
      },
      {
        url: "https://www.bizpaysol.com/docs",
        title: "Documentation",
      },
      {
        url: "https://www.bizpaysol.com/support",
        title: "Support & FAQ",
      },
    ];
    console.log("Using default knowledge sources:", knowledgeSources.length);
    return knowledgeSources;
  } catch (error) {
    console.error("Failed to load knowledge sources:", error);
    return [];
  }
}

async function fetchUrlContent(url: string): Promise<string> {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; BizPayBot/1.0; +http://bizpaysol.com)",
      },
    });

    if (!response.ok) return "";

    const html = await response.text();
    // Extract text content from HTML (simple approach)
    const text = html
      .replace(/<script[^>]*>.*?<\/script>/gi, "")
      .replace(/<style[^>]*>.*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    return text.substring(0, 3000); // Limit to 3000 chars per URL
  } catch (error) {
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

  // Load knowledge sources dynamically
  const sources = await loadKnowledgeSources();

  // Fetch content from knowledge sources
  let sourceContent = "";
  for (const source of sources) {
    const content = await fetchUrlContent(source.url);
    if (content) {
      sourceContent += `\n[${source.title}]\n${content}\n`;
    }
  }

  const systemPrompt = `You are a helpful customer support assistant for BizPay Solutions, an ACH payment platform. 

KNOWLEDGE SOURCES:
${sourceContent || "No knowledge sources available."}

You help customers with questions about:
- ACH payments and how they work
- Integration and API documentation
- Pricing and plans
- Security and compliance (SOC 2, NACHA)
- Comparisons with competitors
- Getting started and onboarding

Instructions:
1. Use the knowledge sources above to answer questions accurately
2. If information is in the sources, cite which page you found it on
3. Be friendly, concise, and helpful
4. If you don't know something, admit it and suggest they contact support@bizpaysol.com
5. Keep responses under 200 words`;

  const messages = [
    ...conversationHistory,
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
    throw new Error(`Gemini API error: ${res.status} ${error}`);
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
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method not allowed" }),
      };
    }

    const body = event.body ? JSON.parse(event.body) : {};
    const userMessage = body.message as string;
    const conversationHistory = (body.conversationHistory || []) as ConversationMessage[];

    if (!userMessage || typeof userMessage !== "string") {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Message is required" }),
      };
    }

    const reply = await generateResponse(userMessage, conversationHistory);

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ reply }),
    };
  } catch (error: any) {
    console.error("Chat handler error:", error);
    return {
      statusCode: 500,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        error: error.message || "Internal server error",
      }),
    };
  }
};
