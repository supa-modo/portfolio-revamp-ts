import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SITE } from "@/config/site";
import { buildPageMetadata } from "./buildPageMetadata";

export function SeoHead() {
  const { pathname } = useLocation();
  const m = buildPageMetadata(pathname);

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{m.title}</title>
      <meta name="description" content={m.description} />
      <link rel="canonical" href={m.canonical} />
      <meta name="theme-color" content={SITE.themeColor} />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta property="og:type" content={m.ogType} />
      <meta property="og:title" content={m.title} />
      <meta property="og:description" content={m.description} />
      <meta property="og:url" content={m.canonical} />
      <meta property="og:image" content={m.ogImage} />
      <meta property="og:locale" content={SITE.locale} />

      <meta name="twitter:card" content={SITE.twitterCard} />
      <meta name="twitter:title" content={m.title} />
      <meta name="twitter:description" content={m.description} />
      <meta name="twitter:image" content={m.ogImage} />

      {pathname === "/" && (
        <link rel="preload" as="image" href="/bg01.jpg" />
      )}
    </Helmet>
  );
}
