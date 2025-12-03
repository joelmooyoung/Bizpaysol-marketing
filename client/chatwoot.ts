// Chatwoot widget loader without inline JS
const BASE_URL = "https://app.chatwoot.com";

function loadChatwoot() {
  // Get token from window global set by Netlify edge function
  const WEBSITE_TOKEN = (window as any).__CHATWOOT_TOKEN__ || '';
  
  if (!WEBSITE_TOKEN) {
    console.warn('Chatwoot token not found in window.__CHATWOOT_TOKEN__');
    return;
  }

  console.log('Chatwoot: Loading with token:', WEBSITE_TOKEN.substring(0, 10) + '...');

  if ((window as any).chatwootSDK) {
    console.log('Chatwoot: SDK already loaded, running...');
    (window as any).chatwootSDK.run({
      websiteToken: WEBSITE_TOKEN,
      baseUrl: BASE_URL,
    });
    return;
  }
  
  console.log('Chatwoot: Injecting SDK script...');
  const s = document.createElement("script");
  s.src = `${BASE_URL}/packs/js/sdk.js`;
  s.async = true;
  s.crossOrigin = "anonymous";
  s.addEventListener("load", () => {
    console.log('Chatwoot: SDK loaded, initializing...');
    (window as any).chatwootSDK?.run({
      websiteToken: WEBSITE_TOKEN,
      baseUrl: BASE_URL,
    });
  });
  s.addEventListener("error", () => {
    console.error('Chatwoot: Failed to load SDK script');
  });
  document.head.appendChild(s);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadChatwoot);
} else {
  loadChatwoot();
}
