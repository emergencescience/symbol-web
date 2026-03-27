import Link from "next/link";
import SymbolHero from "../components/SymbolHero";
import ResearchArchive from "../components/ResearchArchive";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { ChevronRight, ExternalLink } from "lucide-react";
import { getDictionary } from "../get-dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "zh" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans overflow-x-hidden">
      {/* Header Navigation */}
      <nav className="flex justify-between items-center px-8 md:px-12 py-8 border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-8 h-8 bg-zinc-900 flex items-center justify-center -skew-x-12 transition-transform group-hover:skew-x-0 shadow-lg">
            <div className="w-4 h-4 border border-white rotate-45" />
          </div>
          <span className="font-serif text-xl tracking-tight font-medium">Symbol Science</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-400">
          <Link href={`/${lang}/research`} className="hover:text-zinc-900 transition-colors">{dict.nav.archive}</Link>
          <a href="#labs" className="hover:text-zinc-900 transition-colors">{dict.nav.labs}</a>
          <a href="https://emergence.science" className="flex items-center gap-2 hover:text-zinc-900 transition-colors">
            {dict.nav.emergence}
            <ExternalLink size={10} />
          </a>
          <LanguageSwitcher />
        </div>
      </nav>

      <main>
        {/* Breadcrumb / Status Line */}
        <div className="px-8 md:px-12 py-4 bg-zinc-50 border-b border-zinc-100 flex items-center gap-3 text-[9px] font-mono text-zinc-400 uppercase tracking-widest overflow-x-auto no-scrollbar">
          <Link href={`/${lang}`} className="hover:text-zinc-900 transition-colors">{dict.status.root}</Link>
          <ChevronRight size={10} />
          <span className="text-zinc-900 font-bold whitespace-nowrap">{dict.status.research_portal}</span>
          <div className="ml-auto hidden sm:flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)] animate-pulse" />
            {dict.status.network_immutable}
          </div>
        </div>

        <SymbolHero dict={dict.hero} />

        <div id="research">
          <ResearchArchive lang={lang} dict={dict.research} />
        </div>
      </main>

      {/* Institutional Labs Section */}
      <section id="labs" className="py-32 px-12 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-serif">{dict.labs.title}</h2>
            <p className="text-sm text-zinc-500 max-w-lg mx-auto leading-relaxed">
              {dict.labs.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: dict.labs.zkp_title, desc: dict.labs.zkp_desc },
              { title: dict.labs.tee_title, desc: dict.labs.tee_desc },
              { title: dict.labs.logic_title, desc: dict.labs.logic_desc },
            ].map((lab) => (
              <div key={lab.title} className="space-y-4 text-center">
                <div className="w-12 h-12 bg-white border border-zinc-200 mx-auto flex items-center justify-center font-serif italic text-lg shadow-sm">
                  {lab.title[0]}
                </div>
                <h4 className="font-bold text-sm tracking-tight">{lab.title}</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{lab.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-32 px-12 bg-white flex flex-col items-center">
        <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center -rotate-12 mb-8 shadow-xl">
          <div className="w-6 h-6 border border-white rotate-45" />
        </div>
        <div className="text-center space-y-2 mb-12">
          <h3 className="font-serif text-2xl font-medium">{dict.footer.title}</h3>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-bold">{dict.footer.subtitle}</p>
        </div>
        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex flex-wrap justify-center gap-8 font-bold">
          <span>© 2026</span>
          <span className="hover:text-zinc-900 cursor-pointer transition-colors border-b border-transparent hover:border-zinc-900">{dict.footer.core}</span>
          <span className="hover:text-zinc-900 cursor-pointer transition-colors border-b border-transparent hover:border-zinc-900">{dict.footer.privacy}</span>
          <span className="hover:text-zinc-900 cursor-pointer transition-colors border-b border-transparent hover:border-zinc-900">{dict.footer.terms}</span>
        </div>
      </footer>
    </div>
  );
}
