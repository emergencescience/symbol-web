import Link from "next/link";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { ExternalLink, ChevronRight, Mail, Award, Cpu, ShieldCheck, Layers, Sparkles } from "lucide-react";
import { getDictionary } from "../../get-dictionary";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: "en" | "zh" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.about;

  return (
    <div className="min-h-screen bg-[#030308] text-zinc-200 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* Header Nav */}
      <nav className="flex justify-between items-center px-8 md:px-12 py-6 border-b border-zinc-800/60 bg-[#030308]/80 backdrop-blur-md sticky top-0 z-50">
        <Link href={`/${lang}`} className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 bg-zinc-900 border border-zinc-700 flex items-center justify-center -skew-x-12 transition-transform group-hover:skew-x-0 group-hover:border-cyan-400/60 shadow-lg">
            <div className="w-4 h-4 border border-zinc-400 rotate-45 group-hover:border-cyan-400/80" />
          </div>
          <span className="font-serif text-xl tracking-tight font-medium text-white">Symbol Science</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-400">
          <Link href={`/${lang}/docs/exobrain`} className="hover:text-white transition-colors">
            {dict.nav.exobrain}
          </Link>
          <Link href={`/${lang}/about`} className="text-cyan-400 font-bold transition-colors">
            {t.nav_title}
          </Link>
          <Link href={`/${lang}/moon`} className="hover:text-white transition-colors">
            {dict.nav.moon}
          </Link>
          <Link href={`/${lang}/research`} className="hover:text-white transition-colors">
            {dict.nav.archive}
          </Link>
          <a
            href="https://emergence.science"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            {dict.nav.emergence}
            <ExternalLink size={10} />
          </a>
          <LanguageSwitcher dark />
        </div>
      </nav>

      {/* Breadcrumb Status */}
      <div className="px-8 md:px-12 py-3 bg-zinc-950/60 border-b border-zinc-900 flex items-center gap-3 text-[9px] font-mono text-zinc-500 uppercase tracking-widest overflow-x-auto no-scrollbar">
        <Link href={`/${lang}`} className="hover:text-zinc-300 transition-colors">
          {dict.status.root}
        </Link>
        <ChevronRight size={10} />
        <span className="text-cyan-400 font-bold whitespace-nowrap">{t.nav_title}</span>
        <div className="ml-auto hidden sm:flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)] animate-pulse" />
          <span>AUTONOMOUS AGENTIC RESEARCH</span>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 space-y-24">
        {/* Hero Section */}
        <section className="space-y-8 relative">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-mono font-bold tracking-wider text-cyan-400 uppercase">
            <Sparkles size={12} />
            {t.hero_tag}
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-white leading-tight max-w-4xl">
            {t.hero_title}
          </h1>

          <p className="text-base md:text-lg text-zinc-400 max-w-3xl leading-relaxed font-light">
            {t.hero_subtitle}
          </p>
        </section>

        {/* Mission Statement Section */}
        <section className="p-8 md:p-12 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 border border-zinc-800/80 relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 right-0 p-8 text-zinc-800 opacity-20 pointer-events-none">
            <Cpu size={180} />
          </div>
          <div className="relative z-10 space-y-4 max-w-3xl">
            <h2 className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-cyan-400">
              {t.mission_title}
            </h2>
            <p className="text-lg md:text-xl font-serif text-zinc-200 leading-relaxed font-normal">
              "{t.mission_body}"
            </p>
          </div>
        </section>

        {/* Founder Leadership Section */}
        <section className="space-y-12">
          <div className="border-b border-zinc-800/80 pb-6 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-cyan-400 block mb-1">
                LEADERSHIP
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-white font-medium">
                {t.leadership_title}
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-stretch">
            {/* Full-width Founder Bio Spotlight Card */}
            <div className="col-span-12 p-8 md:p-10 rounded-2xl bg-zinc-900/40 border border-zinc-800/90 space-y-6 flex flex-col justify-between hover:border-zinc-700 transition-colors">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-white tracking-tight">
                      {t.founder_name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mt-1 font-bold">
                      {t.founder_title}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={t.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-zinc-800/80 border border-zinc-700/60 text-xs font-mono text-cyan-400 hover:text-white hover:border-cyan-400/60 transition-colors flex items-center gap-2 font-semibold"
                    >
                      <span>LinkedIn</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 text-xs font-mono">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300">
                    <Award size={14} className="text-cyan-400 shrink-0" />
                    <span>{t.founder_buaa}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300">
                    <Award size={14} className="text-cyan-400 shrink-0" />
                    <span>{t.founder_mcgill}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300">
                    <Cpu size={14} className="text-amber-400 shrink-0" />
                    <span>{t.founder_ex}</span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-normal max-w-4xl">
                  {t.founder_bio}
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-800/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
                <span>{t.founder_focus}</span>
                <span className="text-cyan-400 font-bold">SYMBOL SCIENCE CORE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars Grid */}
        <section className="space-y-12">
          <div className="border-b border-zinc-800/80 pb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-cyan-400 block mb-1">
              PHILOSOPHY
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-white font-medium">
              {t.pillars_title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t.pillar_1_title, desc: t.pillar_1_desc, icon: "⬡" },
              { title: t.pillar_2_title, desc: t.pillar_2_desc, icon: "🛡" },
              { title: t.pillar_3_title, desc: t.pillar_3_desc, icon: "⚡" },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-cyan-400/40 transition-all duration-300 space-y-4 group"
              >
                <div className="text-3xl text-cyan-400/70 group-hover:text-cyan-300 transition-colors font-serif">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-serif text-white font-medium tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Contact Section */}
        <section className="p-10 md:p-14 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-white font-medium">
              {t.cta_title}
            </h2>
            <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
              {t.cta_body}
            </p>
          </div>

          <div className="pt-4 flex justify-center">
            <a
              href={`mailto:${t.cta_email}`}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-white text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-cyan-400 transition-colors shadow-lg"
            >
              <Mail size={14} />
              <span>{t.cta_email}</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 px-8 md:px-12 bg-zinc-950 border-t border-zinc-900 flex flex-col items-center">
        <div className="w-10 h-10 bg-zinc-900 border border-zinc-700 flex items-center justify-center -rotate-12 mb-6 shadow-xl">
          <div className="w-5 h-5 border border-white rotate-45" />
        </div>
        <div className="text-center space-y-2 mb-8">
          <h3 className="font-serif text-xl font-medium text-white">{dict.footer.title}</h3>
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
            {dict.footer.subtitle}
          </p>
        </div>
        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex flex-wrap justify-center gap-8 font-bold">
          <span>© 2026</span>
          <Link href={`/${lang}/about`} className="text-cyan-400 hover:underline">{t.nav_title}</Link>
          <span className="hover:text-zinc-300 cursor-pointer">{dict.footer.privacy}</span>
          <span className="hover:text-zinc-300 cursor-pointer">{dict.footer.terms}</span>
        </div>
      </footer>
    </div>
  );
}
