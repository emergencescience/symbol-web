"use client";

import React, { useEffect, useRef, useState } from "react";

interface MoonParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  type: "dust" | "spark" | "crystal";
  phase: number;
}

export default function MoonFactoryHero({ dict }: { dict: any }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const particlesRef = useRef<MoonParticle[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    // Initialize particles — regolith dust + crystallizing sparks
    const particles: MoonParticle[] = [];
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2 - 0.15,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        type: "dust",
        phase: Math.random() * Math.PI * 2,
      });
    }
    // Crystal growth seeds — brighter, slower
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h * 0.8,
        vx: (Math.random() - 0.5) * 0.1,
        vy: -0.05 - Math.random() * 0.15,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.8 + 0.2,
        type: "crystal",
        phase: Math.random() * Math.PI * 2,
      });
    }
    // Laser sparks from top
    for (let i = 0; i < 8; i++) {
      particles.push({
        x: w * 0.5 + (Math.random() - 0.5) * 60,
        y: 0,
        vx: (Math.random() - 0.5) * 0.5,
        vy: 0.6 + Math.random() * 0.4,
        size: Math.random() * 1 + 0.5,
        opacity: 0.7,
        type: "spark",
        phase: 0,
      });
    }
    particlesRef.current = particles;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);

      // Deep space gradient background
      const bgGrad = ctx.createRadialGradient(
        w * 0.5,
        h * 0.35,
        0,
        w * 0.5,
        h * 0.5,
        Math.max(w, h)
      );
      bgGrad.addColorStop(0, "#0d0d1a");
      bgGrad.addColorStop(0.5, "#080812");
      bgGrad.addColorStop(1, "#020208");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Earth glow — subtle blue dot at top center
      const earthGrad = ctx.createRadialGradient(
        w * 0.5,
        -20,
        0,
        w * 0.5,
        -20,
        180
      );
      earthGrad.addColorStop(0, "rgba(74, 158, 255, 0.25)");
      earthGrad.addColorStop(0.5, "rgba(74, 158, 255, 0.06)");
      earthGrad.addColorStop(1, "rgba(74, 158, 255, 0)");
      ctx.fillStyle = earthGrad;
      ctx.fillRect(0, 0, w, h);

      // Lunar surface glow at bottom
      const moonGrad = ctx.createRadialGradient(
        w * 0.5,
        h + 40,
        0,
        w * 0.5,
        h + 40,
        h * 0.7
      );
      moonGrad.addColorStop(0, "rgba(212, 168, 83, 0.12)");
      moonGrad.addColorStop(0.5, "rgba(180, 140, 70, 0.04)");
      moonGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = moonGrad;
      ctx.fillRect(0, 0, w, h);

      // Draw particles
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.phase += 0.01;

        // Wrap around
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) {
          p.y = -10;
          // Reset laser sparks at top
          if (p.type === "spark") {
            p.x = w * 0.5 + (Math.random() - 0.5) * 100;
            p.y = -5;
          }
        }

        const alpha = p.opacity * (0.7 + 0.3 * Math.sin(p.phase));

        if (p.type === "spark") {
          // Laser spark — blue-white
          ctx.fillStyle = `rgba(160, 210, 255, ${alpha})`;
          ctx.shadowColor = "rgba(74, 158, 255, 0.8)";
          ctx.shadowBlur = 6;
        } else if (p.type === "crystal") {
          // Crystal — gold
          ctx.fillStyle = `rgba(212, 168, 83, ${alpha})`;
          ctx.shadowColor = "rgba(212, 168, 83, 0.3)";
          ctx.shadowBlur = 3;
        } else {
          // Regolith dust — warm grey
          ctx.fillStyle = `rgba(180, 170, 155, ${alpha})`;
          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        if (p.type === "crystal") {
          // Diamond shape
          const s = p.size;
          ctx.moveTo(p.x, p.y - s);
          ctx.lineTo(p.x + s * 0.6, p.y);
          ctx.lineTo(p.x, p.y + s);
          ctx.lineTo(p.x - s * 0.6, p.y);
          ctx.closePath();
        } else {
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Subtle laser beam from top center
      const beamTime = (time * 0.0005) % 1;
      const beamAlpha = 0.04 + 0.03 * Math.sin(time * 0.002);
      const beamGrad = ctx.createLinearGradient(
        w * 0.5,
        0,
        w * 0.5 + Math.sin(time * 0.001) * 20,
        h
      );
      beamGrad.addColorStop(0, `rgba(74, 158, 255, ${beamAlpha * 2})`);
      beamGrad.addColorStop(0.3, `rgba(74, 158, 255, ${beamAlpha})`);
      beamGrad.addColorStop(1, "rgba(212, 168, 83, 0.02)");
      ctx.fillStyle = beamGrad;
      ctx.fillRect(w * 0.5 - 1.5, 0, 3, h);

      // Conway grid — very subtle, bottom half, hinting at cellular automata / self-replication
      const gridCols = 30;
      const gridRows = 15;
      const cellW = w / gridCols;
      const cellH = (h * 0.4) / gridRows;
      const gridY = h * 0.55;
      for (let r = 0; r < gridRows; r++) {
        for (let c = 0; c < gridCols; c++) {
          const seed = (r * 31 + c * 17) % 100;
          if (seed < 12) {
            const alpha =
              (0.04 + 0.02 * Math.sin(time * 0.001 + r * 0.5 + c * 0.3)) *
              (1 - scrollY / 800);
            ctx.fillStyle = `rgba(212, 168, 83, ${Math.max(0, alpha)})`;
            ctx.fillRect(c * cellW, gridY + r * cellH, cellW - 1, cellH - 1);
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      {/* Dark gradient overlays for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        {/* Tag line */}
        <div className="mb-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400/60 border border-amber-400/20 rounded-full px-4 py-2">
            {dict.hero_tag}
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight mb-6 leading-[1.05]"
            style={{ textShadow: "0 0 120px rgba(212,168,83,0.3)" }}>
          {dict.hero_title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-zinc-400 font-light max-w-xl leading-relaxed mb-12">
          {dict.hero_subtitle}
        </p>

        {/* Laser beam accent line */}
        <div className="w-px h-16 bg-gradient-to-b from-blue-400/60 to-amber-400/20 mb-12" />

        {/* CTA */}
        <a
          href="#constraint"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("constraint")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-all duration-500"
        >
          <span className="w-8 h-px bg-zinc-600 group-hover:bg-amber-400/60 group-hover:w-12 transition-all duration-500" />
          Explore
          <span className="w-8 h-px bg-zinc-600 group-hover:bg-amber-400/60 group-hover:w-12 transition-all duration-500" />
        </a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020208] to-transparent pointer-events-none" />
    </div>
  );
}
