export default async (req: any) => {
  const token = process.env.VITE_CHATWOOT_TOKEN || "";
  
  return new Response(`window.__CHATWOOT_TOKEN__ = "${token}";`, {
    status: 200,
    headers: {
      "Content-Type": "application/javascript",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
