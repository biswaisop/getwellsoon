"use client";

import React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function ScrollSkyBackground() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  // Sky Gradient interpolation colors from Dawn -> Midday -> Sunset
  const skyTop = useTransform(
    scrollYProgress,
    [0, 0.3, 0.65, 1],
    [
      "#fce7d2", // Dawn soft peach
      "#dbeafe", // Morning crisp light blue
      "#fed7aa", // Late afternoon warm amber
      "#1e1b4b", // Sunset deep twilight indigo
    ]
  );

  const skyMiddle = useTransform(
    scrollYProgress,
    [0, 0.3, 0.65, 1],
    [
      "#fef3c7", // Dawn soft golden glow
      "#f0fdf4", // Midday clean daylight
      "#fbcfe8", // Late afternoon soft rose
      "#581c87", // Sunset rich purple
    ]
  );

  const skyBottom = useTransform(
    scrollYProgress,
    [0, 0.3, 0.65, 1],
    [
      "#fed7aa", // Dawn horizon
      "#fef9c3", // Midday soft cream
      "#fdba74", // Afternoon peach
      "#b45309", // Sunset warm amber horizon
    ]
  );

  const skyBackground = useTransform(
    [skyTop, skyMiddle, skyBottom],
    ([top, mid, bot]) =>
      `linear-gradient(180deg, ${top} 0%, ${mid} 50%, ${bot} 100%)`
  );

  // Soft Sun in background only (gentle, unobtrusive)
  const sunX = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    ["70%", "75%", "78%", "80%"]
  );

  const sunY = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    ["22%", "15%", "35%", "62%"]
  );

  const sunOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.75, 0.85, 0.85, 0.95]
  );

  // Mountain layer parallax
  const distantPeaksY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const forePeaksY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  // Mountain silhouettes color shifts to deep twilight
  const distantRidgeFill = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    ["#9ca3af", "#94a3b8", "#78716c", "#312e81"]
  );

  const foreRidgeFill = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    ["#64748b", "#64748b", "#57534e", "#1e1b4b"]
  );

  if (shouldReduceMotion) {
    return (
      <div
        className="fixed inset-0 pointer-events-none -z-10 bg-gradient-to-b from-amber-50 via-stone-50 to-amber-100"
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Sky Canvas Gradient */}
      <motion.div
        className="absolute inset-0"
        style={{ background: skyBackground }}
      />

      {/* Gentle Sun (in background only, clean soft circle, no glaring text overlap) */}
      <motion.div
        className="absolute w-28 h-28 sm:w-36 sm:h-36 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none bg-gradient-to-br from-amber-200 via-amber-300 to-orange-400 blur-[1px]"
        style={{
          left: sunX,
          top: sunY,
          opacity: sunOpacity,
        }}
      />

      {/* Layer 1: Distant Jagged Peaks */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[36vh] sm:h-[44vh] opacity-40"
        style={{ y: distantPeaksY }}
      >
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 400"
        >
          <motion.path
            style={{ fill: distantRidgeFill }}
            d="M0,230 L110,160 L220,240 L340,140 L460,220 L580,120 L720,210 L840,110 L960,220 L1080,150 L1200,210 L1200,400 L0,400 Z"
          />
        </svg>
      </motion.div>

      {/* Layer 2: Foreground Soft Mountain Silhouette */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[26vh] sm:h-[30vh] opacity-55"
        style={{ y: forePeaksY }}
      >
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 300"
        >
          <motion.path
            style={{ fill: foreRidgeFill }}
            d="M0,170 Q240,90 480,180 T960,150 T1200,180 L1200,300 L0,300 Z"
          />
        </svg>
      </motion.div>
    </div>
  );
}
