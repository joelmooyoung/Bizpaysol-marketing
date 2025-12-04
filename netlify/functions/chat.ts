// Chat API endpoint - handles user messages and generates responses using Gemini
const GEMINI_API_KEY = process.env.GEMINI_API_KEY as string;

interface ConversationMessage {
  role: "user" | "assistant";
  content: string;
}

async function generateResponse(
  userMessage: string,
  conversationHistory: ConversationMessage[]
): Promise<string> {
  if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY not configured");
  }

  const systemPrompt = `You are a helpful customer support assistant for BizPay Solutions, an ACH payment platform. 
You help customers with questions about:
- ACH payments and how they work
- Integration and API documentation
- Pricing and plans
- Security and compliance (SOC 2, NACHA)
- Comparisons with competitors (Stripe, Dwolla, Modern Treasury, etc.)
- Getting started and onboarding

Be friendly, concise, and helpful. If you don't know something, admit it and suggest they contact support@bizpaysol.com.`;

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
