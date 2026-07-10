import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://aarthvaahini.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/directors", changefreq: "monthly", priority: "0.6" },
  { path: "/loans", changefreq: "weekly", priority: "0.9" },
  { path: "/insurance", changefreq: "weekly", priority: "0.9" },
  { path: "/mutual-funds", changefreq: "weekly", priority: "0.9" },
  { path: "/cibil", changefreq: "weekly", priority: "0.8" },
  { path: "/blogs", changefreq: "weekly", priority: "0.7" },
  { path: "/blogs/cibil-score", changefreq: "monthly", priority: "0.6" },
  { path: "/blogs/home-loan-guide", changefreq: "monthly", priority: "0.6" },
  { path: "/blogs/sip-guide", changefreq: "monthly", priority: "0.6" },
  { path: "/partner-signup", changefreq: "monthly", priority: "0.6" },
  { path: "/login", changefreq: "yearly", priority: "0.3" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
