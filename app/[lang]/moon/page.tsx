import Link from "next/link";
import MoonFactoryHero from "../../components/MoonFactoryHero";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { ExternalLink, ChevronDown } from "lucide-react";
import { getDictionary } from "../../get-dictionary";

export default async function MoonPage({
  params,
}: {
  params: Promise<{ lang: "en" | "zh" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.moon;

  return (
    <div className="bg-[#020208] text-zinc-300 font-sans">
      {/* Header Nav — transparent over hero */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-12 py-6 bg-transparent">
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

        <div className="hidden md:flex items-center gap-8 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-500">
          <Link
            href={`/${lang}/moon`}
            className="text-amber-400/80 hover:text-amber-300 transition-colors"
          >
            {t.nav_title}
          </Link>
          <Link
            href={`/${lang}/research`}
            className="hover:text-zinc-300 transition-colors"
          >
            {dict.nav.archive}
          </Link>
          <a
            href="https://emergence.science"
            className="flex items-center gap-2 hover:text-zinc-300 transition-colors"
          >
            {dict.nav.emergence}
            <ExternalLink size={10} />
          </a>
          <LanguageSwitcher dark />
        </div>
      </nav>

      {/* Hero */}
      <MoonFactoryHero dict={t} />

      {/* Section 1: The Constraint */}
      <section
        id="constraint"
        className="relative py-32 md:py-48 px-8 md:px-12"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400/50">
                § 01
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                {t.constraint_title}
              </h2>
              <p className="text-zinc-400 leading-relaxed text-base">
                {t.constraint_body}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { value: t.constraint_stat_1, label: t.constraint_stat_1_label },
                { value: t.constraint_stat_2, label: t.constraint_stat_2_label },
                { value: t.constraint_stat_3, label: t.constraint_stat_3_label },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border border-zinc-800 bg-zinc-900/30 p-6 group hover:border-amber-400/20 transition-all duration-500"
                >
                  <div className="text-3xl font-serif text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Seed */}
      <section className="relative py-32 md:py-48 px-8 md:px-12 border-t border-zinc-900">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(212,168,83,0.04),transparent_70%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400/50">
            § 02
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
            {t.seed_title}
          </h2>
          <p className="text-zinc-400 leading-relaxed text-lg max-w-2xl mx-auto">
            {t.seed_body}
          </p>
          <div className="inline-block border border-amber-400/15 bg-amber-400/5 px-8 py-4 mt-4">
            <p className="text-sm font-mono text-amber-400/70 italic">
              {t.seed_callout}
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: How It Grows — 4 steps */}
      <section className="relative py-32 md:py-48 px-8 md:px-12 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400/50">
              § 03
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mt-4">
              {t.growth_title}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-0">
            {[
              { title: t.growth_step_1_title, desc: t.growth_step_1_desc },
              { title: t.growth_step_2_title, desc: t.growth_step_2_desc },
              { title: t.growth_step_3_title, desc: t.growth_step_3_desc },
              { title: t.growth_step_4_title, desc: t.growth_step_4_desc },
            ].map((step, i) => (
              <div
                key={step.title}
                className="relative p-8 border border-zinc-800 md:border-r-0 last:border-r last:border-zinc-800 group hover:bg-zinc-900/30 transition-all duration-500"
              >
                {/* Connection line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-px w-px h-12 bg-gradient-to-b from-amber-400/30 to-transparent" />
                )}
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-xs font-mono text-zinc-500 group-hover:border-amber-400/40 group-hover:text-amber-400/70 transition-all">
                    {i + 1}
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-200">
                    {step.title}
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: New Chemistry */}
      <section className="relative py-32 md:py-48 px-8 md:px-12 border-t border-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(74,158,255,0.06),transparent_50%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-400/50">
            § 04
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
            {t.chemistry_title}
          </h2>
          <p className="text-zinc-400 leading-relaxed text-lg">
            {t.chemistry_body}
          </p>
          <div className="inline-block border border-blue-400/15 bg-blue-400/5 px-8 py-4 mt-4">
            <p className="text-sm font-mono text-blue-400/70 italic">
              {t.chemistry_callout}
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Timeline */}
      <section className="relative py-32 md:py-48 px-8 md:px-12 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400/50">
              § 05
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 mb-4">
              {t.timeline_title}
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed">
              {t.timeline_body}
            </p>
          </div>

          {/* Timeline line */}
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/40 via-zinc-800 to-zinc-800" />

            <div className="space-y-16">
              {[
                { phase: t.timeline_phase_1, desc: t.timeline_phase_1_desc },
                { phase: t.timeline_phase_2, desc: t.timeline_phase_2_desc },
                { phase: t.timeline_phase_3, desc: t.timeline_phase_3_desc },
                { phase: t.timeline_phase_4, desc: t.timeline_phase_4_desc },
              ].map((item, i) => (
                <div
                  key={item.phase}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 top-2 w-3 h-3 -translate-x-1.5 rounded-full border-2 border-amber-400/60 bg-[#020208]" />

                  <div className={`pl-16 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <h4 className="text-sm font-bold font-mono uppercase tracking-wider text-amber-400/80 mb-2">
                      {item.phase}
                    </h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="relative py-32 md:py-48 px-8 md:px-12 border-t border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(212,168,83,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">
            § 06
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
            {t.cta_title}
          </h2>
          <p className="text-zinc-400 leading-relaxed text-lg">
            {t.cta_body}
          </p>

          {/* Email CTA */}
          <a
            href={`mailto:${t.cta_email}`}
            className="inline-flex items-center gap-3 border border-amber-400/30 bg-amber-400/5 px-8 py-4 mt-8 group hover:border-amber-400/60 transition-all duration-500 cursor-pointer"
          >
            <span className="text-sm font-mono text-amber-400/80">{t.cta_button}</span>
            <span className="text-zinc-500">→</span>
            <span className="text-sm text-zinc-400 font-mono">{t.cta_email}</span>
          </a>
        </div>
      </section>

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
