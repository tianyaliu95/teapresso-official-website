import { MetadataRoute } from "next";

const BASE_URL = "https://www.tea-presso.com";

const PAGES: { path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/menu", changeFrequency: "weekly", priority: 0.9 },
  { path: "/locations", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/franchising", changeFrequency: "monthly", priority: 0.6 },
  { path: "/click-collect", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
