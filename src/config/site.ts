import { SOCIAL_LINKS } from "@/utils/constants";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";

export const SITE = {
  /** Canonical public name — use everywhere (titles, schema, footer). */
  personName: "Eddy Ochieng Odhiambo",
  /** Primary professional headline / job title for schema & meta. */
  jobTitle: "Full-Stack Developer",
  /** City / country for local discovery. */
  locationLabel: "Nairobi, Kenya",
  /** Default document title (home). */
  defaultTitle:
    "Eddy Ochieng Odhiambo — Full-Stack Developer | Nairobi, Kenya | Freelance & Contract",
  /** `%s` is replaced by page-specific title segment. */
  titleTemplate: "%s | Eddy Ochieng Odhiambo",
  /** ~155–160 chars; freelance + stack + location. */
  defaultDescription:
    "Full-stack developer in Nairobi, Kenya. React, TypeScript, Node.js, PostgreSQL, APIs & cloud. Open to freelance, contract, and remote work — portfolio, projects, and contact.",
  projectsIndexTitle: "Projects",
  projectsIndexDescription:
    "Portfolio of full-stack web and product work by Eddy Ochieng Odhiambo — React, Node.js, integrations, and production systems.",
  locale: "en_US",
  /** Path under site origin for default Open Graph / Twitter image. */
  ogImagePath: "/og-image.jpg",
  themeColor: "#0f172a",
  twitterCard: "summary_large_image" as const,
} as const;

function trimTrailingSlash(url: string): string {
  return url.replace(/\/+$/, "");
}

/**
 * Canonical site origin (https://yourdomain.com). Set `VITE_SITE_URL` in production.
 */
export function getSiteUrl(): string {
  const raw = import.meta.env.VITE_SITE_URL?.trim();
  if (raw) return trimTrailingSlash(raw);
  if (typeof window !== "undefined") return trimTrailingSlash(window.location.origin);
  return "https://eddyodhiambo.vercel.app";
}

export function absoluteUrl(pathOrUrl: string): string {
  const base = getSiteUrl();
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
}

export function defaultOgImageUrl(): string {
  return absoluteUrl(SITE.ogImagePath);
}

/** SameAs URLs for Person schema (public profiles only). */
export function getSameAs(): string[] {
  return [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin].filter(Boolean);
}

/**
 * Aggregate skill and project tags for `knowsAbout` (Person schema).
 */
export function getKnowsAboutTerms(max = 30): string[] {
  const fromSkills = skillCategories.flatMap((c) => c.skills.map((s) => s.name));
  const fromProjects = projects.flatMap((p) => p.tags);
  return [...new Set([...fromSkills, ...fromProjects])].slice(0, max);
}

export function truncateDescription(text: string, maxLen = 160): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= maxLen) return t;
  return `${t.slice(0, maxLen - 1).trim()}…`;
}
