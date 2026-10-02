import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    "",
    "/services",
    ...services.map((service) => `/services/${service.slug}`),
    "/about",
    "/work",
    ...projects.map((project) => `/work/${project.slug}`),
    "/contact",
    "/privacy",
  ];

  return paths.map((path) => ({ url: `${siteUrl}${path}`, lastModified }));
}
