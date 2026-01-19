import { projects } from "@/data/projects";
import type { Project } from "@/types";

/**
 * Converts a project name to a URL-friendly slug
 * Example: "EAC Internships Platform" → "eac-internships-platform"
 */
export const slugify = (name: string): string => {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with single hyphen
};

/**
 * Finds a project by its slug
 * Returns undefined if no project matches the slug
 */
export const findProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => slugify(project.name) === slug);
};

/**
 * Gets the slug for a given project
 */
export const getProjectSlug = (project: Project): string => {
  return slugify(project.name);
};
