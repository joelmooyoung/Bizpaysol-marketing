// Admin endpoint to manage knowledge sources
// Protected by ADMIN_TOKEN environment variable

interface KnowledgeSource {
  url: string;
  title: string;
}

const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "";

export const handler = async (event: any) => {
  try {
    // Check admin token
    const token = event.headers?.authorization?.replace("Bearer ", "");
    if (!ADMIN_TOKEN || token !== ADMIN_TOKEN) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: "Unauthorized" }),
      };
    }

    if (event.httpMethod === "GET") {
      // Get current knowledge sources
      const sources: KnowledgeSource[] =
        process.env.KNOWLEDGE_SOURCES &&
        process.env.KNOWLEDGE_SOURCES !== "undefined"
          ? JSON.parse(process.env.KNOWLEDGE_SOURCES).sources
          : [
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

      return {
        statusCode: 200,
        body: JSON.stringify({
          sources,
          message:
            "To update sources, POST with { sources: [ { url, title }, ... ] }",
        }),
      };
    }

    if (event.httpMethod === "POST") {
      // Update knowledge sources (NOTE: This updates in memory only)
      // For persistent storage, you'd need to use a database or store in Netlify Build environment
      const body = event.body ? JSON.parse(event.body) : {};
      const newSources = body.sources as KnowledgeSource[];

      if (!Array.isArray(newSources)) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            error: "sources must be an array of { url, title }",
          }),
        };
      }

      // Validate sources
      for (const source of newSources) {
        if (!source.url || !source.title) {
          return {
            statusCode: 400,
            body: JSON.stringify({
              error: "Each source must have url and title",
            }),
          };
        }
      }

      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Knowledge sources updated",
          sources: newSources,
          note: "To persist changes, update your Netlify environment variables or repository config",
        }),
      };
    }

    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  } catch (error: any) {
    console.error("Admin handler error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message || "Internal server error",
      }),
    };
  }
};
