import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const slugs = ["shappay", "ui-to-json", "oshap", "nawnaw", "flow"];

const routes = [
  "",
  "/articles",
  "/decisions",
  ...slugs.map((s) => `/work/${s}`),
  ...slugs.map((s) => `/articles/${s}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified,
  }));
}
