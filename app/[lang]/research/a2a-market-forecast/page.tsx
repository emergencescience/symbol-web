import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react";

export const metadata = {
    title: "A2A Market Forecast (2030-2035) | Symbol Science",
    description: "A comprehensive research report on the Agent-to-Agent (A2A) economy, market size projections, and the rise of Private Agent Intranets.",
    openGraph: {
        title: "A2A Market Forecast (2030-2035) | Symbol Science",
        description: "Machine Customers are expected to influence $30 Trillion in economic activity by 2030.",
        type: "article",
        publishedTime: "2026-02-23",
        authors: ["Symbol Science Research Group"],
    },
};

export default function A2AForecastPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30">
            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft size={16} />
                        <span className="text-sm font-medium">Home</span>
                    </Link>
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Research Whitepaper</div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
                {/* Article Header */}
                <header className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                        Research Report: A2A Market Forecast (2030-2035)
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-mono">
                        <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            <span>Feb 23, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={14} />
                            <span>Prometheus Strategy Group</span>
                        </div>
                        <div className="px-2 py-1 bg-white/5 rounded text-cyan-400">v1.2.0</div>
                    </div>
                </header>

                {/* Article Body */}
                <article className="prose prose-invert prose-cyan max-w-none">
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">1. Executive Summary</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            The Agent-to-Agent (A2A) economy is projected to be one of the most significant transformations in global commerce.
                            By 2030, autonomous agents ("Machine Customers") are expected to influence or participate in up to
                            <span className="text-white font-semibold"> $30 Trillion</span> in economic activity.
                            The market for the agents themselves and their coordination infrastructure is expected to reach
                            <span className="text-white font-semibold"> $50B by 2030</span> and surpass
                            <span className="text-white font-semibold"> $250B by 2035</span>.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">2. Superset Categorization: Internet vs. Intranet</h2>
                        <div className="overflow-x-auto my-8">
                            <table className="w-full border-collapse border border-white/10 text-sm">
                                <thead>
                                    <tr className="bg-white/5">
                                        <th className="border border-white/10 p-4 text-left font-bold">Feature</th>
                                        <th className="border border-white/10 p-4 text-left font-bold">Public Agent Internet</th>
                                        <th className="border border-white/10 p-4 text-left font-bold">Private Agent Intranet</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-white/10 p-4 font-medium">Network</td>
                                        <td className="border border-white/10 p-4 text-gray-400">Open Web / Decentralized</td>
                                        <td className="border border-white/10 p-4 text-gray-400">Corporate VPN / Air-gapped</td>
                                    </tr>
                                    <tr className="bg-white/2">
                                        <td className="border border-white/10 p-4 font-medium">Trust Model</td>
                                        <td className="border border-white/10 p-4 text-gray-400 text-cyan-400">Verification-as-a-Service (VaaS)</td>
                                        <td className="border border-white/10 p-4 text-gray-400">Trust-by-Policy (LDAP)</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-white/10 p-4 font-medium">Market Size (2030)</td>
                                        <td className="border border-white/10 p-4 text-gray-400">~$50B (Platform Fees)</td>
                                        <td className="border border-white/10 p-4 text-white font-bold">~$45B (Infrastructure)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight text-cyan-400 text-sm">Case Study</h2>
                        <h3 className="text-xl font-bold mb-4 italic text-gray-300">"The Rise of Enterprise AI Orchestration"</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            While the public A2A market garners headlines, the <strong>Private Agent Intranet</strong> market is developing rapidly behind corporate firewalls.
                            Fortune 500 companies are deploying thousands of specialized agents for internal resource optimization, creating a need for
                            <span className="text-white italic underline decoration-cyan-500/50"> internal trading platforms</span> that can manage compute credits,
                            departmental budgets, and sensitive data access without human intervention.
                        </p>
                    </section>

                    <section className="mb-12 border-l-2 border-cyan-500 pl-8 py-4 bg-white/5 rounded-r-lg">
                        <h2 className="text-xl font-bold mb-2">Development Catalyst: Standards (ERC-8004)</h2>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Adopting universal standards like <strong>ERC-8004 (Trustless Agents)</strong> is critical.
                            By standardizing Discovery, Identity, and Validation registries, we allow agents to interact across organizational boundaries
                            using pluggable trust models proportional to value-at-risk.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">Strategic References</h2>
                        <ul className="grid gap-4 list-none p-0">
                            {[
                                { name: "ERC-8004: Trustless Agents Specification", link: "https://eips.ethereum.org/EIPS/eip-8004" },
                                { name: "RISC Zero: Computing with Integrity", link: "https://dev.risczero.com/api" },
                                { name: "ARK Invest Big Ideas 2024", link: "https://ark-invest.com/big-ideas-2024/" }
                            ].map((ref, i) => (
                                <li key={i}>
                                    <a
                                        href={ref.link}
                                        target="_blank"
                                        className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/50 hover:bg-white/10 transition-all group"
                                    >
                                        <span className="text-gray-300 group-hover:text-white transition-colors">{ref.name}</span>
                                        <ExternalLink size={14} className="text-gray-500 group-hover:text-cyan-400" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                </article>

                <footer className="mt-20 pt-8 border-t border-white/10 flex justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
                    <div>© 2026 Symbol Science</div>
                    <Link href="/" className="hover:text-white transition-colors">Back to home</Link>
                </footer>
            </main>
        </div>
    );
}
