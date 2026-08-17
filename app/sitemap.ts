import type { MetadataRoute } from "next";

const SITE_URL = "https://www.abhinavtiwary.online";

const routes = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/skills", priority: 0.7 },
  { path: "/experience", priority: 0.8 },
  { path: "/work", priority: 0.9 },
  { path: "/achievements", priority: 0.6 },
  { path: "/certifications", priority: 0.5 },
  { path: "/education", priority: 0.5 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-17");

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
