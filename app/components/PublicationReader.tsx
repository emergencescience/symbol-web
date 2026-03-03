"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import "highlight.js/styles/github.css"; // Using standard github style for institutional clarity
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
                const res = await fetch(`/content/${slug}.md`);
                if (!res.ok) throw new Error("Publication not found");
                let text = await res.text();

                // Rewrite relative image paths to work in the web app
                // From ../resources/ to /content/resources/
                text = text.replace(/src="\.\.\/resources\//g, 'src="/content/resources/');
                text = text.replace(/src='\.\.\/resources\//g, "src='/content/resources/");
                text = text.replace(/\(\.\.\/resources\//g, '(/content/resources/');

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

            {/* Markdown Content - Institutional Typography */}
            <div className="prose prose-zinc prose-sm md:prose-base lg:prose-lg max-w-none 
                font-serif leading-relaxed text-zinc-800
                prose-headings:font-serif prose-headings:text-zinc-950 prose-headings:tracking-tight
                prose-h1:text-5xl prose-h1:font-medium prose-h1:mb-16 prose-h1:pb-8 prose-h1:border-b prose-h1:border-zinc-100
                prose-h2:text-3xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:font-medium text-zinc-900
                prose-h3:text-sm prose-h3:mt-16 prose-h3:mb-6 prose-h3:font-bold prose-h3:uppercase prose-h3:tracking-[0.25em] prose-h3:text-zinc-400
                prose-p:mb-10 prose-p:leading-[1.9] prose-p:text-zinc-700
                prose-ul:list-none prose-li:my-6
                prose-pre:bg-zinc-50 prose-pre:border prose-pre:border-zinc-100 prose-pre:p-0
                prose-code:text-zinc-900 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:bg-emerald-50/40 prose-code:text-[0.9em] prose-code:border prose-code:border-emerald-100/50
                selection:bg-zinc-900 selection:text-white">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight, rehypeRaw]}
                    components={{
                        // Prevent Hydration Error: Unpack P if it contains Figure/Img
                        p: ({ children }) => {
                            const hasImage = React.Children.toArray(children).some(
                                (child) => React.isValidElement(child) && (child.type === 'img' || (child.props as any)?.node?.tagName === 'img')
                            );
                            if (hasImage) return <div className="my-10">{children}</div>;
                            return <p className="mb-8">{children}</p>;
                        },
                        // High-Fidelity Image Rendering (Markdown + HTML)
                        img: ({ node, ...props }) => (
                            <figure className="my-20 flex flex-col items-center gap-6 p-8 bg-zinc-50/50 border border-zinc-100 rounded-sm shadow-sm transition-all hover:shadow-md group">
                                <div className="overflow-hidden rounded-sm border border-white shadow-2xl relative">
                                    <img
                                        {...props}
                                        className="mx-auto max-h-[750px] object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 pointer-events-none border border-black/5" />
                                </div>
                                {props.alt && (
                                    <figcaption className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em] text-center italic mt-4">
                                        <span className="text-zinc-900 font-bold mr-2">REFERENCE_IMG //</span>
                                        {props.alt}
                                    </figcaption>
                                )}
                            </figure>
                        ),
                        // Professional Code Highlighting Container
                        pre: ({ children }) => (
                            <pre className="overflow-hidden rounded-md border border-zinc-200 my-12 shadow-md bg-[#fdfdfd]">
                                <div className="px-5 py-3 border-b border-zinc-100 bg-zinc-50/80 flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                                    </div>
                                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] font-bold">SYMBOL_RECORDS</span>
                                </div>
                                <div className="p-8 overflow-x-auto text-[0.95em] leading-relaxed">
                                    {children}
                                </div>
                            </pre>
                        ),
                        // Square styled list indicators
                        ul: ({ children }) => (
                            <ul className="list-none pl-8 space-y-8 my-12 relative">
                                {children}
                            </ul>
                        ),
                        li: ({ children }) => (
                            <li className="relative group text-zinc-700 hover:text-zinc-950 transition-colors">
                                <div className="absolute -left-8 top-3 w-2 h-2 bg-zinc-200 group-hover:bg-zinc-900 group-hover:rotate-45 transition-all duration-500" />
                                <div className="leading-loose pl-2">{children}</div>
                            </li>
                        ),
                    }}
                >
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
