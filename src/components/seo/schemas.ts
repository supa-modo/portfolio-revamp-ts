import type { Project } from "@/types";
import {
  SITE,
  absoluteUrl,
  getKnowsAboutTerms,
  getSameAs,
  getSiteUrl,
} from "@/config/site";
import { projects } from "@/data/projects";
import { getProjectSlug } from "@/utils/slug";

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.personName,
    url: getSiteUrl(),
    image: absoluteUrl("/eddy-logo.svg"),
    jobTitle: SITE.jobTitle,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    sameAs: getSameAs(),
    knowsAbout: getKnowsAboutTerms(40),
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE.personName} — Portfolio`,
    url: getSiteUrl(),
    description: SITE.defaultDescription,
    publisher: {
      "@type": "Person",
      name: SITE.personName,
    },
  };
}

export function buildProjectsItemListSchema() {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      url: `${base}/projects/${getProjectSlug(project)}`,
    })),
  };
}

export function buildProjectBreadcrumbSchema(
  project: Project,
  slug: string,
) {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${base}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${base}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: `${base}/projects/${slug}`,
      },
    ],
  };
}

function projectImageUrl(project: Project): string | undefined {
  const img = project.images[0];
  if (!img) return undefined;
  if (img.startsWith("http://") || img.startsWith("https://")) return img;
  return absoluteUrl(img.startsWith("/") ? img : `/${img}`);
}

export function buildProjectWorkSchema(project: Project, slug: string) {
  const base = getSiteUrl();
  const pageUrl = `${base}/projects/${slug}`;
  const image = projectImageUrl(project);

  const author = {
    "@type": "Person" as const,
    name: SITE.personName,
    url: getSiteUrl(),
  };

  const baseFields = {
    "@context": "https://schema.org",
    name: project.name,
    description: project.description,
    url: pageUrl,
    ...(image ? { image: [image] } : {}),
    author,
  };

  if (project.githubLink) {
    return {
      ...baseFields,
      "@type": "SoftwareSourceCode",
      codeRepository: project.githubLink,
    };
  }

  return {
    ...baseFields,
    "@type": "CreativeWork",
  };
}
