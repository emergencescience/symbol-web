import type { Metadata } from "next";

interface MoonMetadataProps {
  lang: string;
  dict: any;
  page?: "technology" | "roadmap" | "story";
}

export function generateMoonMetadata({
  lang,
  dict,
  page,
}: MoonMetadataProps): Metadata {
  const t = dict.moon;
  const baseUrl = "https://symbol.science";

  const pageMeta: Record<string, { title: string; desc: string }> = {
    technology: {
      title: `${t.tech_page_title} — ${t.nav_title} | Symbol Science`,
      desc: t.tech_page_desc,
    },
    roadmap: {
      title: `${t.roadmap_page_title} — ${t.nav_title} | Symbol Science`,
      desc: t.roadmap_page_desc,
    },
    story: {
      title: `${t.story_page_title} — ${t.nav_title} | Symbol Science`,
      desc: t.story_page_desc,
    },
  };

  const defaultMeta = {
    title: `${t.nav_title} — Symbol Science`,
    desc: t.hero_subtitle,
  };

  const meta = page ? pageMeta[page] : defaultMeta;

  return {
    metadataBase: new URL(baseUrl),
    title: meta.title,
    description: meta.desc,
    openGraph: {
      title: meta.title,
      description: meta.desc,
      url: page ? `${baseUrl}/${lang}/moon/${page}` : `${baseUrl}/${lang}/moon`,
      siteName: "Symbol Science",
      type: "website",
      locale: lang === "zh" ? "zh_CN" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.desc,
    },
  };
}
