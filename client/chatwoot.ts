// Chatwoot widget loader without inline JS
const BASE_URL = "https://app.chatwoot.com";

function loadChatwoot() {
  // Get token from window global set by Netlify or from meta tag
  const WEBSITE_TOKEN = (window as any).__CHATWOOT_TOKEN__ || 
                       document.querySelector('meta[name="chatwoot-token"]')?.getAttribute('content') || 
                       '';
  
  if (!WEBSITE_TOKEN) {
    console.warn('Chatwoot token not found');
    return;
  }

  if ((window as any).chatwootSDK) {
    (window as any).chatwootSDK.run({
      websiteToken: WEBSITE_TOKEN,
      baseUrl: BASE_URL,
    });
    return;
  }
  const s = document.createElement("script");
  s.src = `${BASE_URL}/packs/js/sdk.js`;
  s.async = true;
  s.crossOrigin = "anonymous";
  s.addEventListener("load", () => {
    (window as any).chatwootSDK?.run({
      websiteToken: WEBSITE_TOKEN,
      baseUrl: BASE_URL,
    });
  });
  document.head.appendChild(s);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadChatwoot);
} else {
  loadChatwoot();
}
