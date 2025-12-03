import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const response = await context.next();
  
  // Only inject into HTML responses
  if (response.headers.get("content-type")?.includes("text/html")) {
    const html = await response.text();
    const chatwootToken = Deno.env.get("VITE_CHATWOOT_TOKEN") || "";
    
    // Inject token into window object before app loads
    const injectedHtml = html.replace(
      "</head>",
      `<script>window.__CHATWOOT_TOKEN__="${chatwootToken}";</script></head>`
    );
    
    return new Response(injectedHtml, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  }
  
  return response;
};

export const config = {
  path: "/*",
};
