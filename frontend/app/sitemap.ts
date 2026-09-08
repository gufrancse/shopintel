import type { MetadataRoute } from "next";

const siteUrl = "https://shopintel.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/search`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/deals`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];
}