import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { vitePrerenderPlugin } from "vite-prerender-plugin";
import path from "path";
import { fileURLToPath } from "node:url";
import { readFileSync, writeFileSync } from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Mirrors `slugify` in `src/utils/slug.ts` without importing `projects` (avoids bundling image assets into the config). */
function slugifyForConfig(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function getProjectPrerenderRoutesFromSource(): string[] {
  const filePath = path.join(__dirname, "src/data/projects.ts");
  const src = readFileSync(filePath, "utf-8");
  const re = /^\s+name:\s*"([^"]+)"\s*,?\s*$/gm;
  const routes: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(src)) !== null) {
    routes.push(`/projects/${slugifyForConfig(m[1])}`);
  }
  return routes;
}

const projectPrerenderRoutes = getProjectPrerenderRoutesFromSource();

function seoSitemapRobotsPlugin(mode: string): Plugin {
  let outDir = "dist";

  return {
    name: "seo-sitemap-robots",
    apply: "build",
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const env = loadEnv(mode, process.cwd(), "");
      const siteUrl = (env.VITE_SITE_URL ?? "https://example.com").replace(
        /\/+$/,
        "",
      );
      const urls = ["/", "/projects", ...projectPrerenderRoutes];
      const lastmod = new Date().toISOString().split("T")[0];
      const urlEntries = urls
        .map((loc) => {
          const priority =
            loc === "/" ? "1.0" : loc === "/projects" ? "0.9" : "0.8";
          return `  <url>
    <loc>${siteUrl}${loc === "/" ? "/" : loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
        })
        .join("\n");

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

      const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

      const root = path.resolve(process.cwd(), outDir);
      writeFileSync(path.join(root, "sitemap.xml"), sitemap);
      writeFileSync(path.join(root, "robots.txt"), robots);
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
    plugins: [
      react(),
      tailwindcss(),
      ...vitePrerenderPlugin({
        renderTarget: "#root",
        prerenderScript: path.resolve(__dirname, "src/prerender.tsx"),
        additionalPrerenderRoutes: ["/projects", ...projectPrerenderRoutes],
      }),
      seoSitemapRobotsPlugin(mode),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
}));
