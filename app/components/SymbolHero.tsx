"use client";

import React, { useEffect, useState, useRef } from "react";

export default function SymbolHero({ dict }: { dict: any }) {
    const [grid, setGrid] = useState<number[][]>([]);
    const rows = 30;
    const cols = 50;

    // Initialize Conway's Game of Life
    useEffect(() => {
        const initialGrid = Array.from({ length: rows }, () =>
            Array.from({ length: cols }, () => (Math.random() > 0.9 ? 1 : 0))
        );
        setGrid(initialGrid);

        const interval = setInterval(() => {
            setGrid((prev) => {
                const next = prev.map((row, i) =>
                    row.map((cell, j) => {
                        let neighbors = 0;
                        for (let x = -1; x <= 1; x++) {
                            for (let y = -1; y <= 1; y++) {
                                if (x === 0 && y === 0) continue;
                                const r = (i + x + rows) % rows;
                                const c = (j + y + cols) % cols;
                                neighbors += prev[r][c];
                            }
                        }
                        if (cell === 1 && (neighbors < 2 || neighbors > 3)) return 0;
                        if (cell === 0 && neighbors === 3) return 1;
                        return cell;
                    })
                );
                return next;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden border-b border-zinc-100">
            {/* Game of Life Background (Ultra Subtle) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div
                    className="grid gap-px h-full w-full"
                    style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
                >
                    {grid.map((row, i) =>
                        row.map((cell, j) => (
                            <div
                                key={`${i}-${j}`}
                                className={`w-full h-full transition-colors duration-1000 ${cell ? 'bg-black' : 'bg-transparent'}`}
                            />
                        ))
                    )}
                </div>
            </div>

            {/* Rotating 3D Symbol (Pseudo-3D CSS) */}
            <div className="relative z-10 perspective-1000">
                <div className="w-64 h-64 border-2 border-zinc-900 absolute rotate-x-45 rotate-y-45 animate-spin-slow opacity-20" />
                <div className="w-64 h-64 border-2 border-zinc-900 absolute -rotate-x-45 -rotate-y-45 animate-reverse-spin-slow opacity-20" />

                <div className="flex flex-col items-center text-center space-y-6 pt-12">
                    <div className="w-20 h-20 bg-black flex items-center justify-center shadow-2xl skew-x-12">
                        <div className="w-10 h-10 border-2 border-white rotate-45" />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-4xl font-serif tracking-tight text-zinc-900 italic">
                            {dict.title}
                        </h1>
                        <p className="text-xs font-mono uppercase tracking-[0.4em] text-zinc-400 max-w-lg mx-auto">
                            {dict.subtitle}
                        </p>
                    </div>
                </div>
            </div>

            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 pointer-events-none" />

            <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .rotate-x-45 { transform: rotateX(45deg); }
        .rotate-y-45 { transform: rotateY(45deg); }
        .animate-spin-slow { animation: spin 10s linear infinite; }
        .animate-reverse-spin-slow { animation: reverse-spin 15s linear infinite; }
        @keyframes spin { from { transform: rotateX(45deg) rotateY(45deg) rotateZ(0deg); } to { transform: rotateX(45deg) rotateY(45deg) rotateZ(360deg); } }
        @keyframes reverse-spin { from { transform: rotateX(-45deg) rotateY(-45deg) rotateZ(360deg); } to { transform: rotateX(-45deg) rotateY(-45deg) rotateZ(0deg); } }
      `}</style>
        </div>
    );
}
