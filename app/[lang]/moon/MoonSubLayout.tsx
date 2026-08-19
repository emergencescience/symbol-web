"use client";

import Link from "next/link";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { ExternalLink } from "lucide-react";

interface MoonSubLayoutProps {
  children: React.ReactNode;
  lang: string;
  dict: any;
  activePage?: "technology" | "roadmap" | "story";
}

export default function MoonSubLayout({
  children,
  lang,
  dict,
  activePage,
}: MoonSubLayoutProps) {
  const t = dict.moon;

  const navItems = [
    { id: "overview", label_en: "Overview", label_zh: "概览", href: `/${lang}/moon` },
    { id: "technology", label_en: t.subnav_technology || "Technology", label_zh: t.subnav_technology || "技术", href: `/${lang}/moon/technology` },
    { id: "roadmap", label_en: t.subnav_roadmap || "Roadmap", label_zh: t.subnav_roadmap || "路线图", href: `/${lang}/moon/roadmap` },
    { id: "story", label_en: t.subnav_story || "Story", label_zh: t.subnav_story || "故事", href: `/${lang}/moon/story` },
  ];

  return (
    <div className="min-h-screen bg-[#020208] text-zinc-300 font-sans">
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-12 py-6 bg-[#020208]/90 backdrop-blur-sm border-b border-zinc-900">
        <Link
          href={`/${lang}`}
          className="flex items-center gap-3 group"
        >
          <div className="w-7 h-7 border border-zinc-600 flex items-center justify-center -skew-x-12 transition-transform group-hover:skew-x-0 group-hover:border-amber-400/60">
            <div className="w-3.5 h-3.5 border border-zinc-500 rotate-45 group-hover:border-amber-400/60" />
          </div>
          <span className="text-sm font-serif tracking-tight text-zinc-400 group-hover:text-white transition-colors">
            Symbol Science
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-500">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={
                item.id === (activePage || "overview")
                  ? "text-amber-400/80 hover:text-amber-300 transition-colors"
                  : "hover:text-zinc-300 transition-colors"
              }
            >
              {lang === "zh" ? item.label_zh : item.label_en}
            </Link>
          ))}
          <Link
            href={`/${lang}/docs/exobrain`}
            className="hover:text-zinc-300 transition-colors ml-2"
          >
            {dict.nav.exobrain}
          </Link>
          <a
            href="https://emergence.science"
            className="flex items-center gap-2 hover:text-zinc-300 transition-colors ml-2"
          >
            {dict.nav.emergence}
            <ExternalLink size={10} />
          </a>
          <LanguageSwitcher dark />
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 px-8 md:px-16 max-w-5xl mx-auto pb-32">
        {children}
      </div>

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-zinc-900 flex flex-col items-center gap-4">
        <Link href={`/${lang}`} className="flex items-center gap-3 group">
          <div className="w-6 h-6 border border-zinc-700 flex items-center justify-center -skew-x-12 transition-transform group-hover:skew-x-0 group-hover:border-amber-400/40">
            <div className="w-3 h-3 border border-zinc-600 rotate-45 group-hover:border-amber-400/40" />
          </div>
          <span className="text-xs font-serif tracking-tight text-zinc-500 group-hover:text-zinc-300 transition-colors">
            Symbol Science
          </span>
        </Link>
        <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">
          {dict.footer.subtitle}
        </p>
      </footer>
    </div>
  );
}
