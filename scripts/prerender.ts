import fs from "node:fs/promises";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";

async function loadPage(
  modulePath: string,
): Promise<React.FC | (() => JSX.Element)> {
  const mod = await import(modulePath);
  return (mod.default ?? mod) as any;
}

async function renderPageToHtml(Component: any) {
  const element = React.createElement(Component);
  const html = renderToString(element);
  return html;
}

function setPerRouteMeta(template: string, route: string) {
  try {
    const canonicalMatch = template.match(
      /<link\s+rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i,
    );
    const baseHref = canonicalMatch?.[1] || "https://www.bizpaysol.com/";
    const origin = new URL(baseHref).origin;
    const canonicalUrl =
      route === "/" ? `${origin}/` : `${origin}${route.replace(/\/$/, "")}/`;

    // Replace canonical href
    template = template.replace(
      /(<link\s+rel=["']canonical["'][^>]*href=)["'][^"']+["']/i,
      `$1"${canonicalUrl}"`,
    );

    // Replace og:url
    if (template.match(/<meta\s+property=["']og:url["'][^>]*content=/i)) {
      template = template.replace(
        /(<meta\s+property=["']og:url["'][^>]*content=)["'][^"']+["']/i,
        `$1"${canonicalUrl}"`,
      );
    }

    return template;
  } catch {
    return template; // fail-safe
  }
}

async function injectIntoTemplate(
  template: string,
  ssr: string,
  route: string,
) {
  const withSSR = template.replace(
    '<div id="root"></div>',
    `<div id=\"root\">${ssr}</div>`,
  );
  return setPerRouteMeta(withSSR, route);
}

async function ensureDir(p: string) {
  await fs.mkdir(p, { recursive: true });
}

async function main() {
  const projectRoot = path.resolve(process.cwd());
  const distSpa = path.join(projectRoot, "dist", "spa");
  const templatePath = path.join(distSpa, "index.html");

  let template = await fs.readFile(templatePath, "utf8");

  const routes: { route: string; module: string }[] = [
    { route: "/", module: "@/pages/Index.tsx" },
    { route: "/product", module: "@/pages/Product.tsx" },
    { route: "/pricing", module: "@/pages/Pricing.tsx" },
    { route: "/docs", module: "@/pages/Docs.tsx" },
    { route: "/support", module: "@/pages/Support.tsx" },
    { route: "/about", module: "@/pages/About.tsx" },
    { route: "/case-studies", module: "@/pages/CaseStudies.tsx" },
    { route: "/security", module: "@/pages/Security.tsx" },
    { route: "/compare/stripe-ach", module: "@/pages/compare/StripeACH.tsx" },
    { route: "/compare/dwolla", module: "@/pages/compare/Dwolla.tsx" },
    {
      route: "/compare/modern-treasury",
      module: "@/pages/compare/ModernTreasury.tsx",
    },
    { route: "/compare/gocardless", module: "@/pages/compare/GoCardless.tsx" },
  ];

  for (const { route, module } of routes) {
    const Component = await loadPage(module);
    const ssr = await renderPageToHtml(Component);
    const html = await injectIntoTemplate(template, ssr, route);

    if (route === "/") {
      // Overwrite root index with SSR content
      await fs.writeFile(templatePath, html, "utf8");
    } else {
      const outDir = path.join(distSpa, route);
      await ensureDir(outDir);
      await fs.writeFile(path.join(outDir, "index.html"), html, "utf8");
    }
  }

  console.log(`[ssg] Prerendered ${routes.length} routes to ${distSpa}`);
}

main().catch((err) => {
  console.error("[ssg] Failed:", err);
  process.exit(1);
});
