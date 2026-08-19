import Link from "next/link";
import type { Metadata } from "next";
import LanguageSwitcher from "../../../components/LanguageSwitcher";
import { ChevronRight, ExternalLink, FileText } from "lucide-react";
import { getDictionary } from "../../../get-dictionary";

const SITE = "https://symbol.science";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "zh" }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.exobrain;
  const canonical = `${SITE}/${lang}/docs/exobrain`;

  return {
    title: t.meta_title,
    description: t.meta_description,
    alternates: {
      canonical,
      languages: {
        en: `${SITE}/en/docs/exobrain`,
        zh: `${SITE}/zh/docs/exobrain`,
        "x-default": `${SITE}/en/docs/exobrain`,
      },
    },
    openGraph: {
      title: t.meta_title,
      description: t.meta_description,
      url: canonical,
      siteName: "Symbol Science",
      type: "website",
      locale: lang === "zh" ? "zh_CN" : "en_US",
    },
    twitter: {
      card: "summary",
      title: t.meta_title,
      description: t.meta_description,
    },
  };
}

export default async function ExobrainPage({
  params,
}: {
  params: Promise<{ lang: "en" | "zh" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.exobrain;
  const workspaceUrl = `https://emergence.science/${lang}/exobrain`;
  const canonical = `${SITE}/${lang}/docs/exobrain`;
  const markdownHref = lang === "zh" ? "/exobrain.zh.md" : "/exobrain.md";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Exobrain",
        applicationCategory: "ScientificApplication",
        operatingSystem: "Web",
        url: canonical,
        description: t.meta_description,
        publisher: {
          "@type": "Organization",
          name: "Symbol Science",
          url: SITE,
        },
        sameAs: [
          "https://emergence.science/exobrain",
          "https://emergence.science/en/exobrain",
          "https://emergence.science/zh/exobrain",
        ],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: t.faq_1_q,
            acceptedAnswer: { "@type": "Answer", text: t.faq_1_a },
          },
          {
            "@type": "Question",
            name: t.faq_2_q,
            acceptedAnswer: { "@type": "Answer", text: t.faq_2_a },
          },
          {
            "@type": "Question",
            name: t.faq_3_q,
            acceptedAnswer: { "@type": "Answer", text: t.faq_3_a },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="flex justify-between items-center px-8 md:px-12 py-8 border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <Link href={`/${lang}`} className="flex items-center gap-4 group">
          <div className="w-8 h-8 bg-zinc-900 flex items-center justify-center -skew-x-12 transition-transform group-hover:skew-x-0 shadow-lg">
            <div className="w-4 h-4 border border-white rotate-45" />
          </div>
          <span className="font-serif text-xl tracking-tight font-medium">
            Symbol Science
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-400">
          <Link href={`/${lang}/docs/exobrain`} className="text-zinc-900 transition-colors">
            {dict.nav.exobrain}
          </Link>
          <Link href={`/${lang}/about`} className="hover:text-zinc-900 transition-colors">
            {dict.nav.about}
          </Link>
          <Link href={`/${lang}/moon`} className="hover:text-zinc-900 transition-colors">
            {dict.nav.moon}
          </Link>
          <Link href={`/${lang}/research`} className="hover:text-zinc-900 transition-colors">
            {dict.nav.archive}
          </Link>
          <a
            href="https://emergence.science"
            className="flex items-center gap-2 hover:text-zinc-900 transition-colors"
          >
            {dict.nav.emergence}
            <ExternalLink size={10} />
          </a>
          <LanguageSwitcher />
        </div>
      </nav>

      <div className="px-8 md:px-12 py-4 bg-zinc-50 border-b border-zinc-100 flex items-center gap-3 text-[9px] font-mono text-zinc-400 uppercase tracking-widest overflow-x-auto no-scrollbar">
        <Link href={`/${lang}`} className="hover:text-zinc-900 transition-colors">
          {dict.status.root}
        </Link>
        <ChevronRight size={10} />
        <span>{dict.nav.docs}</span>
        <ChevronRight size={10} />
        <span className="text-zinc-900 font-bold whitespace-nowrap">{dict.nav.exobrain}</span>
        <span className="ml-auto hidden sm:block">{t.updated}</span>
      </div>

      <main className="max-w-3xl mx-auto px-8 md:px-12 py-16 md:py-24 space-y-20">
        <header className="space-y-6">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-zinc-400">
            {t.hero_tag}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight leading-tight">
            {t.hero_title}
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl">{t.hero_subtitle}</p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={workspaceUrl}
              className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-900 text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-zinc-700 transition-colors"
            >
              {t.workspace_label}
              <ExternalLink size={12} />
            </a>
            <a
              href={markdownHref}
              className="inline-flex items-center gap-2 px-5 py-3 border border-zinc-200 text-xs font-mono font-bold uppercase tracking-widest text-zinc-600 hover:border-zinc-900 hover:text-zinc-900 transition-colors"
            >
              <FileText size={12} />
              {t.markdown_label}
            </a>
          </div>
        </header>

        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-sm font-mono font-bold uppercase tracking-[0.2em] text-zinc-400">
              {t.is_title}
            </h2>
            <ul className="space-y-3 text-sm text-zinc-700 leading-relaxed">
              <li>{t.is_1}</li>
              <li>{t.is_2}</li>
              <li>{t.is_3}</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-sm font-mono font-bold uppercase tracking-[0.2em] text-zinc-400">
              {t.is_not_title}
            </h2>
            <ul className="space-y-3 text-sm text-zinc-700 leading-relaxed">
              <li>{t.is_not_1}</li>
              <li>{t.is_not_2}</li>
              <li>{t.is_not_3}</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-serif">{t.domains_title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href={workspaceUrl}
              className="block p-6 border border-zinc-200 hover:border-zinc-900 transition-colors space-y-2"
            >
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
                emergence.science/exobrain
              </p>
              <h3 className="font-serif text-xl">{t.domains_workspace}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{t.domains_workspace_desc}</p>
            </a>
            <div className="p-6 border border-zinc-900 space-y-2 bg-zinc-50">
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
                symbol.science/docs/exobrain
              </p>
              <h3 className="font-serif text-xl">{t.domains_positioning}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{t.domains_positioning_desc}</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-serif">{t.example_title}</h2>
          <div className="border border-zinc-200 divide-y divide-zinc-100">
            <div className="p-6 space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
                {t.example_claim}
              </h3>
              <p className="font-serif text-lg">{t.example_claim_text}</p>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
                {t.example_status}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-widest bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {t.status_verified}
                </span>
                <span className="px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-widest bg-red-50 text-red-800 border border-red-200">
                  {t.status_failed}
                </span>
                <span className="px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-widest bg-amber-50 text-amber-800 border border-amber-200">
                  {t.status_inconclusive}
                </span>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">{t.example_status_text}</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-serif">{t.compare_title}</h2>
          <dl className="divide-y divide-zinc-100 border-y border-zinc-100">
            {[
              [t.compare_a, t.compare_a_job],
              [t.compare_b, t.compare_b_job],
              [t.compare_c, t.compare_c_job],
              [t.compare_d, t.compare_d_job],
            ].map(([tool, job]) => (
              <div key={tool} className="py-5 grid md:grid-cols-3 gap-2 md:gap-8">
                <dt className="text-sm font-medium">{tool}</dt>
                <dd className="md:col-span-2 text-sm text-zinc-600 leading-relaxed">{job}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif">{t.limits_title}</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">{t.limits_body}</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-serif">{t.faq_title}</h2>
          <dl className="space-y-8">
            {[
              [t.faq_1_q, t.faq_1_a],
              [t.faq_2_q, t.faq_2_a],
              [t.faq_3_q, t.faq_3_a],
            ].map(([q, a]) => (
              <div key={q} className="space-y-2">
                <dt className="font-medium">{q}</dt>
                <dd className="text-sm text-zinc-600 leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border border-zinc-900 p-8 md:p-10 space-y-5">
          <h2 className="text-2xl font-serif">{t.cta_title}</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">{t.cta_body}</p>
          <a
            href={workspaceUrl}
            className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-900 text-white text-xs font-mono font-bold uppercase tracking-widest hover:bg-zinc-700 transition-colors"
          >
            {t.workspace_label}
            <ExternalLink size={12} />
          </a>
        </section>
      </main>

      <footer className="py-16 px-12 border-t border-zinc-100 flex flex-col items-center gap-3">
        <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
          {dict.footer.title}
        </p>
        <p className="text-[10px] font-mono text-zinc-400">{t.updated}</p>
      </footer>
    </div>
  );
}
