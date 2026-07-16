import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { newsPosts } from "@/data/news";

const staticRoutes = [
  "",
  "/about",
  "/manufacturing",
  "/rd-patents",
  "/quality-control",
  "/global-projects",
  "/news",
  "/careers",
  "/contact",
  "/business/roll-forming",
  "/business/aerial-work-platforms",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const newsEntries: MetadataRoute.Sitemap = newsPosts.map((post) => ({
    url: `${siteConfig.url}/news/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...newsEntries];
}
