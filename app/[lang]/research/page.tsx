import ResearchArchive from "../../components/ResearchArchive";
import { ChevronRight, Home as HomeIcon } from "lucide-react";
import Link from "next/link";
import { getDictionary } from "../../get-dictionary";

export default async function ResearchLandingPage({
    params,
}: {
    params: Promise<{ lang: "en" | "zh" }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans overflow-x-hidden">
            {/* Header Navigation (Reused or could be a Global Component) */}
            <nav className="flex justify-between items-center px-8 md:px-12 py-8 border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <Link href={`/${lang}`} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-8 h-8 bg-zinc-900 flex items-center justify-center -skew-x-12 transition-transform group-hover:skew-x-0 shadow-lg">
                        <div className="w-4 h-4 border border-white rotate-45" />
                    </div>
                    <span className="font-serif text-xl tracking-tight font-medium">Symbol Science</span>
                </Link>

                <div className="flex items-center gap-8 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-400">
                    <Link href={`/${lang}/research`} className="text-zinc-900 transition-colors">{dict.nav.archive}</Link>
                    <Link href={`/${lang}#labs`} className="hover:text-zinc-900 transition-colors">{dict.nav.labs}</Link>
                </div>
            </nav>

            <main>
                {/* Enhanced Breadcrumb */}
                <div className="px-8 md:px-12 py-4 bg-zinc-50 border-b border-zinc-100 flex items-center gap-3 text-[9px] font-mono text-zinc-400 uppercase tracking-widest overflow-x-auto no-scrollbar">
                    <Link href={`/${lang}`} className="hover:text-zinc-900 transition-colors flex items-center gap-1">
                        <HomeIcon size={10} /> {dict.status.root}
                    </Link>
                    <ChevronRight size={10} />
                    <span className="text-zinc-900 font-bold whitespace-nowrap">{dict.status.research_portal}</span>
                </div>

                <div className="py-24">
                   <ResearchArchive lang={lang} dict={dict.research} />
                </div>
            </main>

            <footer className="py-24 px-12 bg-zinc-50 border-t border-zinc-100 flex flex-col items-center">
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
                    Symbol Science Research Archive | {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    );
}
