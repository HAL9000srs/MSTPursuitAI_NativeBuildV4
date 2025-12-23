"use client";

import React from "react";
import { inter } from "@/lib/fonts";

export default function HolographicBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#001a2c]">
      {/* Base Layer: The high-res chip image */}
      <div className="background-image opacity-60" />

      {/* CRT Scanline Overlay */}
      <div className="absolute inset-0 crt-overlay opacity-30" />

      {/* Glowing Circuit Paths - SVG Layer */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <g className="glow-element">
          {/* Simulated isometric circuits */}
          <path
            d="M 200,800 L 400,600 L 600,600 L 800,400"
            fill="none"
            stroke="#00f2ff"
            strokeWidth="0.5"
            className="opacity-40"
          />
          <path
            d="M 300,900 L 500,700 L 700,700 L 900,500"
            fill="none"
            stroke="#00f2ff"
            strokeWidth="1"
            className="opacity-30"
          />
          <circle cx="400" cy="600" r="2" fill="#00f2ff" />
          <circle cx="600" cy="600" r="2" fill="#00f2ff" />
          <path
            d="M 100,500 L 300,300 L 500,300 L 700,100"
            fill="none"
            stroke="#00f2ff"
            strokeWidth="0.8"
            className="opacity-20"
          />
        </g>
      </svg>



      {/* Floating Data Visualization Widgets */}
      <div className="absolute top-1/4 right-10 w-48 h-32 holographic-projection rounded-lg p-4 hidden md:block animate-float">
        <div className={`${inter.className} text-[10px] text-[#00f2ff] uppercase mb-2 opacity-70`}>
          System.DataScale
        </div>
        <div className="flex items-end gap-1 h-12">
          <div
            className="w-full bg-[#00f2ff]/40 h-[60%] animate-pulse"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="w-full bg-[#00f2ff]/60 h-[85%] animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="w-full bg-[#00f2ff]/30 h-[45%] animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="w-full bg-[#00f2ff]/50 h-[70%] animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
      </div>

      <div className="absolute bottom-1/4 left-10 w-40 h-24 holographic-projection rounded-lg p-3 hidden lg:block animate-float-delayed">
        <div className={`${inter.className} text-[8px] text-[#00f2ff] uppercase mb-1 opacity-70`}>
          Neural.Link_Status
        </div>
        <div className="w-full h-[2px] bg-[#00f2ff]/20 mt-2 overflow-hidden">
          <div className="w-1/2 h-full bg-[#00f2ff] animate-scan-line" />
        </div>
        <div className={`${inter.className} text-[12px] text-[#00f2ff] mt-2 font-mono`}>
          ACTIVE // 0.8ms
        </div>
      </div>

      {/* Global Vignette for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#001a2c] via-transparent to-[#001a2c]/50 pointer-events-none" />
    </div>
  );
}

// Add these to globals.scss or locally via Tailwind config if possible, but I'll add them to globals.scss for reliability.
