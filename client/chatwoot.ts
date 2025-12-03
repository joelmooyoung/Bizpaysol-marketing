// Chatwoot widget loader without inline JS
const BASE_URL = "https://app.chatwoot.com";
const WEBSITE_TOKEN = "mzAFwoCeVKJ9w4u93xYPhJyT";

function loadChatwoot() {
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
