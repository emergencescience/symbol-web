"use client";

import React from "react";
import Link from "next/link";
import { FileText, ExternalLink, Calendar, Hash } from "lucide-react";

interface ResearchPaper {
    id: string;
    slug: string;
    title: string;
    authors: string[];
    date: string;
    tags: string[];
    abstract: string;
}

interface ResearchArchiveProps {
    lang: string;
    dict: {
        title: string;
        count: string;
        papers: ResearchPaper[];
        contribute_title: string;
        contribute_desc: string;
        contribute_btn: string;
    };
}

export default function ResearchArchive({ lang, dict }: ResearchArchiveProps) {
    const papers = dict.papers;
    return (
        <section className="w-full max-w-4xl mx-auto py-24 px-8">
            <div className="flex items-center justify-between mb-16 border-b border-zinc-100 pb-8">
                <h2 className="text-2xl font-serif text-zinc-800">{dict.title}</h2>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">{papers.length} {dict.count}</span>
            </div>

            <div className="space-y-16">
                {papers.map((paper) => (
                    <Link
                        key={paper.id}
                        href={`/${lang}/research/${paper.slug}`}
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
                <h3 className="font-serif text-xl">{dict.contribute_title}</h3>
                <p className="text-sm text-zinc-500 max-w-md mx-auto">
                    {dict.contribute_desc}
                </p>
                <button className="text-xs font-mono font-bold uppercase tracking-widest pt-4 hover:underline">
                    {dict.contribute_btn}
                </button>
            </div>
        </section>
    );
}
