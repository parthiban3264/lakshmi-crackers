"use client";

import React, { useEffect, useRef } from "react";

export default function DiwaliFlowerpot({
  active = true,
  scale = 1.0,
  primaryColor = "#f59e0b",
  sparkColor = "#fef08a",
  baseColor = "#ef4444",
  className = "",
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = (canvas.width = 460);
    const h = (canvas.height = 540);
    let particles: Spark[] = [];
    let frameId: number;

    class Spark {
      x: number;
      y: number;
      vx: number;
      vy: number;
      gravity: number;
      alpha: number;
      decay: number;
      size: number;
      color: string;

      constructor() {
        // Tip of the cone nozzle
        this.x = w / 2 + (Math.random() - 0.5) * 16;
        this.y = h * 0.56;

        // Fountain fan spread
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.85;
        // DO NOT multiply by scale here so sparks always shoot high
        const speed = 9 + Math.random() * 11;

        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed; // Shoot upward
        this.gravity = 0.22;
        this.alpha = 1;
        this.decay = 0.012 + Math.random() * 0.018;
        this.size = Math.random() * 4 + 2;
        this.color = Math.random() > 0.35 ? primaryColor : sparkColor;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        this.alpha -= this.decay;
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.globalAlpha = Math.max(0, this.alpha);
        c.fillStyle = this.color;
        c.shadowColor = this.color;
        c.shadowBlur = 10;
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fill();
        c.restore();
      }
    }

    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      if (active) {
        // Continuous upward sparks
        for (let i = 0; i < 7; i++) {
          particles.push(new Spark());
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw(ctx);
        if (particles[i].alpha <= 0) particles.splice(i, 1);
      }

      frameId = requestAnimationFrame(loop);
    };

    loop();
    return () => cancelAnimationFrame(frameId);
  }, [active, primaryColor, sparkColor]);

  const baseW = 460;
  const baseH = 540;

  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-visible select-none ${className}`}
      style={{
        width: `${baseW * scale}px`,
        height: `${baseH * scale}px`,
      }}
    >
      {/* Scaled viewport container */}
      <div
        className="absolute bottom-0 flex flex-col items-center justify-end overflow-visible origin-bottom"
        style={{
          width: `${baseW}px`,
          height: `${baseH}px`,
          transform: `scale(${scale})`,
        }}
      >
        {/* Spark Canvas */}
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 z-20 overflow-visible"
        />

        {/* Pot & Glowing Top Crown */}
        <div className="relative z-10 w-[260px] pb-4">
          {active && (
            <div className="pointer-events-none absolute -top-16 left-1/2 w-[75%] -translate-x-1/2 animate-pulse">
              <svg viewBox="0 0 200 200" className="h-full w-full fill-amber-400 opacity-90 drop-shadow-[0_0_15px_#f59e0b]">
                <path d="M100 0 L108 70 L170 30 L120 85 L200 100 L120 115 L170 170 L108 130 L100 200 L92 130 L30 170 L80 115 L0 100 L80 85 L30 30 L92 70 Z" />
              </svg>
            </div>
          )}

          <svg viewBox="0 0 260 280" className="h-full w-full drop-shadow-2xl">
            <defs>
              <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
            </defs>

            <path d="M98 30 L162 30 L220 230 C220 250 40 250 40 230 Z" fill="url(#bodyGrad)" />
            <path d="M38 230 Q130 265 222 230 L226 248 Q130 282 34 248 Z" fill={baseColor} />
            <path d="M94 48 Q130 54 166 48" stroke="#ea580c" strokeWidth="3" fill="none" />
            <path d="M90 62 Q130 68 170 62" stroke="#ea580c" strokeWidth="3" fill="none" />
            <line x1="88" y1="210" x2="98" y2="155" stroke="#ea580c" strokeWidth="2.5" />
            <line x1="130" y1="210" x2="130" y2="135" stroke="#ea580c" strokeWidth="2.5" />
            <line x1="172" y1="210" x2="162" y2="155" stroke="#ea580c" strokeWidth="2.5" />
            <polygon points="130,118 134,130 147,130 137,138 141,150 130,142 119,150 123,138 113,130 126,130" fill="url(#starGrad)" />
            <polygon points="98,142 101,150 110,150 103,156 106,165 98,159 90,165 93,156 86,150 95,150" fill="url(#starGrad)" />
            <polygon points="162,142 165,150 174,150 167,156 170,165 162,159 154,165 157,156 150,150 159,150" fill="url(#starGrad)" />
          </svg>
        </div>
      </div>
    </div>
  );
}