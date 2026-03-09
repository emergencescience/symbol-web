"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const getNewPath = (locale: string) => {
        if (!pathname) return "/";
        const segments = pathname.split("/");
        segments[1] = locale; // Replace the language segment
        return segments.join("/");
    };

    const currentLang = pathname?.split("/")[1] || "en";

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200/50 bg-white/50 hover:bg-white/80 transition-all text-xs font-mono text-zinc-600 hover:text-zinc-900 shadow-sm backdrop-blur-md"
            >
                <Globe size={14} className="opacity-70" />
                <span className="uppercase">{currentLang}</span>
            </button>

            {isOpen && (
                <div className="absolute top-10 right-0 w-32 bg-white/90 backdrop-blur-lg border border-zinc-100 rounded-xl shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                    <Link
                        href={getNewPath("en")}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-2.5 text-xs font-mono transition-colors ${currentLang === "en" ? "bg-zinc-50 font-bold text-zinc-900" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                            }`}
                    >
                        English
                    </Link>
                    <div className="h-px w-full bg-zinc-100" />
                    <Link
                        href={getNewPath("zh")}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-2.5 text-xs font-mono transition-colors ${currentLang === "zh" ? "bg-zinc-50 font-bold text-zinc-900" : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
                            }`}
                    >
                        中文 (简)
                    </Link>
                </div>
            )}
        </div>
    );
}
