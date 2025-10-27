export interface PageMeta {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  keywords?: string;
  noindex?: boolean;
}

export function setPageMeta(meta: PageMeta) {
  // Set title
  document.title = meta.title;

  // Set or update meta description
  let descTag = document.querySelector('meta[name="description"]');
  if (!descTag) {
    descTag = document.createElement('meta');
    descTag.setAttribute('name', 'description');
    document.head.appendChild(descTag);
  }
  descTag.setAttribute('content', meta.description);

  // Set noindex if specified
  if (meta.noindex) {
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute('content', 'noindex,follow');
  }

  // Set keywords if provided
  if (meta.keywords) {
    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (!keywordsTag) {
      keywordsTag = document.createElement('meta');
      keywordsTag.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsTag);
    }
    keywordsTag.setAttribute('content', meta.keywords);
  }

  // Set canonical URL
  const canonicalUrl = meta.canonicalUrl || window.location.href;
  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement('link');
    canonicalTag.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.setAttribute('href', canonicalUrl);

  // Set OG tags
  const ogTags = [
    { property: 'og:title', content: meta.ogTitle || meta.title },
    { property: 'og:description', content: meta.ogDescription || meta.description },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:image', content: meta.ogImage || 'https://www.bizpaysol.com/placeholder.svg' },
  ];

  ogTags.forEach(({ property, content }) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  });

  // Set Twitter tags
  const twitterTags = [
    { name: 'twitter:title', content: meta.twitterTitle || meta.ogTitle || meta.title },
    { name: 'twitter:description', content: meta.twitterDescription || meta.ogDescription || meta.description },
    { name: 'twitter:image', content: meta.twitterImage || meta.ogImage || 'https://www.bizpaysol.com/placeholder.svg' },
  ];

  twitterTags.forEach(({ name, content }) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  });
}

export function setStructuredData(data: Record<string, any>) {
  let script = document.querySelector('script[data-structured-data="page"]');
  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-structured-data', 'page');
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}
