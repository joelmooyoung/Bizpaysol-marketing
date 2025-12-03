// Chatwoot webhook -> Gemini RAG -> reply via Chatwoot API
const CHATWOOT_BASE_URL = process.env.CHATWOOT_BASE_URL || 'https://app.chatwoot.com';
const CHATWOOT_ACCOUNT_ID = process.env.CHATWOOT_ACCOUNT_ID;
const CHATWOOT_API_TOKEN = process.env.CHATWOOT_API_TOKEN;

async function ragAnswer(question: string) {
  const res = await fetch(`${process.env.URL || ''}/.netlify/functions/rag?action=answer`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ question }),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

async function chatwootReply(conversationId: number | string, content: string) {
  const url = `${CHATWOOT_BASE_URL}/api/v1/accounts/${CHATWOOT_ACCOUNT_ID}/conversations/${conversationId}/messages`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      api_access_token: `${CHATWOOT_API_TOKEN}`,
    },
    body: JSON.stringify({ content, message_type: 'outgoing', private: false }),
  });
  if (!res.ok) throw new Error(`chatwoot reply failed: ${await res.text()}`);
}

export const handler = async (event: any) => {
  try {
    if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method not allowed' };
    if (!CHATWOOT_ACCOUNT_ID || !CHATWOOT_API_TOKEN) return { statusCode: 200, body: 'chatwoot creds missing' };

    const payload = event.body ? JSON.parse(event.body) : {};
    const type = payload?.event || payload?.event_name;
    const msg = payload?.content || payload?.message?.content;
    const conversationId = payload?.conversation?.id || payload?.conversation_id || payload?.id;

    if (type && String(type).includes('message') && msg && conversationId) {
      // Only respond to incoming messages
      if (payload?.message_type && payload.message_type !== 'incoming') return { statusCode: 200, body: 'ignored' };
      const { answer } = await ragAnswer(msg);
      const reply = answer || "I'm not sure yet. A human will follow up.";
      await chatwootReply(conversationId, reply);
      return { statusCode: 200, body: 'ok' };
    }

    return { statusCode: 200, body: 'noop' };
  } catch (e: any) {
    return { statusCode: 500, body: `error: ${e.message}` };
  }
};
