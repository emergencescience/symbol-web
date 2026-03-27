import React from "react";
import "highlight.js/styles/github.css"; 
import { ArrowLeft, Share2, Printer, Bookmark } from "lucide-react";
import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import { markdownToHtml } from "../lib/markdown";

interface PublicationReaderProps {
    slug: string;
}

/**
 * Institutional Publication Reader (Server Component)
 * Optimized for Symbol Science Archive
 */
export default async function PublicationReader({ slug, lang = "en" }: PublicationReaderProps & { lang?: string }) {
    let contentHtml = "";
    
    try {
        let markdown = "";
        const baseDir = path.join(process.cwd(), "public", "content", "archive");

        // Priority 1: lang/slug.md
        const langPath = path.join(baseDir, lang, `${slug}.md`);
        // Priority 2: en/slug.md (fallback)
        const enPath = path.join(baseDir, "en", `${slug}.md`);
        // Priority 3: slug.md (backward compatibility)
        const flatPath = path.join(baseDir, `${slug}.md`);

        try {
            markdown = await fs.readFile(langPath, "utf-8");
        } catch {
            try {
                markdown = await fs.readFile(enPath, "utf-8");
            } catch {
                markdown = await fs.readFile(flatPath, "utf-8");
            }
        }

        // Rewrite relative image paths relative to the folder the slug is in
        const slugParts = slug.split('/');
        const folder = slugParts.length > 1 ? slugParts.slice(0, -1).join('/') : '';
        const baseResourcePath = `/content/archive/${folder ? folder + '/' : ''}resources/`;

        markdown = markdown.replace(/src="\.\/resources\//g, `src="${baseResourcePath}`);
        markdown = markdown.replace(/src='\.\/resources\//g, `src='${baseResourcePath}`);
        markdown = markdown.replace(/\(\.\/resources\//g, `(${baseResourcePath}`);

        // Keep backward compatibility for ../resources/
        markdown = markdown.replace(/src="\.\.\/resources\//g, 'src="/content/resources/');
        markdown = markdown.replace(/src='\.\.\/resources\//g, "src='/content/resources/");
        markdown = markdown.replace(/\(\.\.\/resources\//g, '(/content/resources/');

        contentHtml = await markdownToHtml(markdown);
    } catch (err) {
        contentHtml = "<h1>404</h1><p>Document not found in the archive.</p>";
    }

    return (
        <article className="max-w-4xl mx-auto py-12 px-8 md:px-12 bg-white min-h-screen text-zinc-900 leading-normal">
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
            <div 
                className="prose prose-zinc prose-sm md:prose-base lg:prose-lg max-w-none 
                    font-serif text-zinc-800
                    prose-headings:font-serif prose-headings:text-zinc-950 prose-headings:tracking-tight
                    prose-h1:text-5xl prose-h1:font-medium prose-h1:mb-16 prose-h1:pb-8 prose-h1:border-b prose-h1:border-zinc-100
                    prose-h2:text-3xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:font-medium text-zinc-900
                    prose-h3:text-sm prose-h3:mt-16 prose-h3:mb-6 prose-h3:font-bold prose-h3:uppercase prose-h3:tracking-[0.25em] prose-h3:text-zinc-400
                    prose-p:mb-10 prose-p:leading-[1.9] prose-p:text-zinc-700
                    prose-ul:list-none prose-li:my-6
                    prose-pre:bg-zinc-50 prose-pre:border prose-pre:border-zinc-100 prose-pre:p-0
                    prose-code:text-zinc-900 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:bg-emerald-50/40 prose-code:text-[0.9em] prose-code:border prose-code:border-emerald-100/50
                    selection:bg-zinc-900 selection:text-white"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

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
