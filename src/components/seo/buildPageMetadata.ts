import {
  SITE,
  getSiteUrl,
  truncateDescription,
  defaultOgImageUrl,
} from "@/config/site";
import { findProjectBySlug } from "@/utils/slug";

export interface PageMetadata {
  title: string;
  description: string;
  /** Absolute canonical URL */
  canonical: string;
  ogImage: string;
  ogType: "website" | "article";
}

function normalizePath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/$/, "") || "/";
}

/**
 * Resolve SEO metadata for a URL pathname (e.g. `/`, `/projects`, `/projects/foo-bar`).
 */
export function buildPageMetadata(pathname: string): PageMetadata {
  const base = getSiteUrl();
  const path = normalizePath(pathname);

  if (path === "/") {
    return {
      title: SITE.defaultTitle,
      description: SITE.defaultDescription,
      canonical: `${base}/`,
      ogImage: defaultOgImageUrl(),
      ogType: "website",
    };
  }

  if (path === "/projects") {
    return {
      title: `${SITE.projectsIndexTitle} | ${SITE.personName}`,
      description: SITE.projectsIndexDescription,
      canonical: `${base}/projects`,
      ogImage: defaultOgImageUrl(),
      ogType: "website",
    };
  }

  const projectMatch = path.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) {
    const slug = projectMatch[1];
    const project = findProjectBySlug(slug);
    if (project) {
      const title = `${project.name} | ${SITE.personName}`;
      return {
        title,
        description: truncateDescription(project.description),
        canonical: `${base}/projects/${slug}`,
        ogImage:
          project.images[0] != null
            ? project.images[0].startsWith("http")
              ? project.images[0]
              : `${base}${project.images[0].startsWith("/") ? "" : "/"}${project.images[0]}`
            : defaultOgImageUrl(),
        ogType: "article",
      };
    }
  }

  return {
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    canonical: `${base}${path === "/" ? "/" : path}`,
    ogImage: defaultOgImageUrl(),
    ogType: "website",
  };
}

export type HeadElement = {
  type: string;
  props: Record<string, string>;
  children?: string;
};

/** Meta/link tags for vite-prerender-plugin `head.elements` (deduped strings in Set). */
export function buildHeadElements(meta: PageMetadata): Set<HeadElement> {
  const els: HeadElement[] = [
    { type: "meta", props: { name: "description", content: meta.description } },
    { type: "link", props: { rel: "canonical", href: meta.canonical } },
    { type: "meta", props: { property: "og:type", content: meta.ogType } },
    { type: "meta", props: { property: "og:title", content: meta.title } },
    {
      type: "meta",
      props: { property: "og:description", content: meta.description },
    },
    { type: "meta", props: { property: "og:url", content: meta.canonical } },
    { type: "meta", props: { property: "og:image", content: meta.ogImage } },
    { type: "meta", props: { property: "og:locale", content: SITE.locale } },
    { type: "meta", props: { name: "twitter:card", content: SITE.twitterCard } },
    { type: "meta", props: { name: "twitter:title", content: meta.title } },
    {
      type: "meta",
      props: { name: "twitter:description", content: meta.description },
    },
    { type: "meta", props: { name: "twitter:image", content: meta.ogImage } },
  ];
  return new Set(els);
}
