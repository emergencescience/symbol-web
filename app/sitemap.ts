import type { MetadataRoute } from "next";

const BASE = "https://symbol.science";
const LANGS = ["en", "zh"] as const;
const PATHS = ["", "/docs/exobrain", "/about", "/moon", "/research"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-19");

  return [
    ...LANGS.flatMap((lang) =>
      PATHS.map((path) => ({
        url: `${BASE}/${lang}${path}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: path === "/docs/exobrain" ? 0.9 : path === "" ? 1 : 0.6,
      })),
    ),
    { url: `${BASE}/exobrain.md`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/exobrain.zh.md`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/llms.txt`, lastModified, changeFrequency: "monthly", priority: 0.4 },
  ];
}
