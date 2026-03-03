"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Share2, Printer, Bookmark } from "lucide-react";
import Link from "next/link";

interface PublicationReaderProps {
    slug: string;
}

export default function PublicationReader({ slug }: PublicationReaderProps) {
    const [content, setContent] = useState<string>("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadContent() {
            try {
                // The sync script puts content in /public/content
                const res = await fetch(`/content/${slug}.md`);
                if (!res.ok) throw new Error("Publication not found");
                const text = await res.text();
                setContent(text);
            } catch (err) {
                setContent("# 404\nDocument not found in the archive.");
            } finally {
                setLoading(false);
            }
        }
        loadContent();
    }, [slug]);

    if (loading) {
        return (
            <div className="max-w-3xl mx-auto py-32 px-8 flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-zinc-900 animate-pulse border border-white/20 rotate-45" />
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Accessing Archive...</p>
            </div>
        );
    }

    return (
        <article className="max-w-4xl mx-auto py-12 px-8 md:px-12 bg-white min-h-screen text-zinc-900">
            {/* Utility Bar */}
            <div className="flex items-center justify-between mb-16 border-b border-zinc-100 pb-6">
                <Link
                    href="/#research"
                    className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 hover:text-zinc-900 transition-colors uppercase tracking-widest font-bold"
                >
                    <ArrowLeft size={14} /> Back to Archive
                </Link>
                <div className="flex gap-6 text-zinc-400">
                    <Share2 size={16} className="cursor-pointer hover:text-zinc-900" />
                    <Printer size={16} className="cursor-pointer hover:text-zinc-900" />
                    <Bookmark size={16} className="cursor-pointer hover:text-zinc-900" />
                </div>
            </div>

            {/* Markdown Content */}
            <div className="prose prose-zinc prose-sm md:prose-base max-w-none 
                prose-headings:text-zinc-900 prose-p:text-zinc-800 prose-strong:text-zinc-950
                selection:bg-zinc-900 selection:text-white">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                </ReactMarkdown>
            </div>

            {/* Institutional Footer */}
            <div className="mt-32 pt-16 border-t border-zinc-100 flex flex-col items-center">
                <div className="w-8 h-8 bg-zinc-900 flex items-center justify-center rotate-45 mb-6">
                    <div className="w-4 h-4 border border-white" />
                </div>
                <p className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest text-center">
                    Symbol Science Research Core <br />
                    Document ID: {slug.toUpperCase()} | Version 1.0.1
                </p>
            </div>
        </article>
    );
}
