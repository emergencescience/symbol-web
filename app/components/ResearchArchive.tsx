"use client";

import React from "react";
import Link from "next/link";
import { FileText, ExternalLink, Calendar, Hash } from "lucide-react";

const PAPERS = [
    {
        id: "SR-2026-001",
        slug: "essays/2026-03-03-the-power-of-surprisal-en",
        title: "Surprisal Theory: Economic Settlement as a Function of Verifiable Entropy",
        authors: ["J. Wu", "Orchestrator-01"],
        date: "MARCH 2026",
        tags: ["CORE", "MATHEMATICS"],
        abstract: "This paper formulates the Surprisal Protocol, establishing a formal link between cryptographic verification and agentic economic incentives."
    },
    {
        id: "SR-2026-003",
        slug: "blog/2026-03-03-visual-proof-60-sec",
        title: "Visual Proof: The 60-Second Strategy for Agent Adoption",
        authors: ["Symbol Growth"],
        date: "MARCH 2026",
        tags: ["GROWTH", "UX"],
        abstract: "A strategic overview of how visual transparency and rapid verification cycles drive trust in the autonomous agent economy."
    },
    {
        id: "SR-2026-004",
        slug: "essays/2026-03-03-the-power-of-surprisal-zh",
        title: "惊变理论：可验证智能的经济基石 (Chinese Edition)",
        authors: ["J. Wu"],
        date: "MARCH 2026",
        tags: ["PHILOSOPHY", "ZH"],
        abstract: "The foundational essay defining the long-term impact of an autonomous agent economy, translated for the global research community."
    }
];

export default function ResearchArchive() {
    return (
        <section className="w-full max-w-4xl mx-auto py-24 px-8">
            <div className="flex items-center justify-between mb-16 border-b border-zinc-100 pb-8">
                <h2 className="text-2xl font-serif text-zinc-800">Research & Publications</h2>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">{PAPERS.length} Documents Found</span>
            </div>

            <div className="space-y-16">
                {PAPERS.map((paper) => (
                    <Link
                        key={paper.id}
                        href={`/research/${paper.slug}`}
                        className="group cursor-pointer block"
                    >
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-16 bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-500">
                                    <FileText size={20} />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                                    <span className="flex items-center gap-1"><Hash size={10} /> {paper.id}</span>
                                    <span className="flex items-center gap-1"><Calendar size={10} /> {paper.date}</span>
                                </div>

                                <h3 className="text-xl font-serif text-zinc-900 group-hover:underline underline-offset-4 decoration-zinc-200">
                                    {paper.title}
                                </h3>

                                <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl">
                                    {paper.abstract}
                                </p>

                                <div className="flex gap-2 pt-2">
                                    {paper.tags.map(tag => (
                                        <span key={tag} className="text-[9px] font-bold text-zinc-500 border border-zinc-100 px-2 py-0.5 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                <ExternalLink size={16} className="text-zinc-400" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-24 p-12 bg-zinc-50 border border-zinc-100 text-center space-y-4">
                <h3 className="font-serif text-xl">Contributing to the Archive</h3>
                <p className="text-sm text-zinc-500 max-w-md mx-auto">
                    Symbol Science is an open-research institution. We welcome formal proofs and papers related to the agent economy.
                </p>
                <button className="text-xs font-mono font-bold uppercase tracking-widest pt-4 hover:underline">
                    Submission Guidelines →
                </button>
            </div>
        </section>
    );
}
