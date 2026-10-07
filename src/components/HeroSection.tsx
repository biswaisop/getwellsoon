"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { content } from "@/data/content";

export function HeroSection() {
  const { hero } = content;

  return (
    <section
      aria-label="Hero"
      className="min-h-[85vh] flex flex-col justify-between items-center text-center max-w-md sm:max-w-lg mx-auto px-6 py-24"
    >
      <div className="w-full my-auto space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal"
        >
          {hero.subtitle}
        </motion.p>

        {/* Small second line below subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="text-sm text-stone-500 font-medium italic"
        >
          {hero.dedication}
        </motion.p>
      </div>

      {/* Gentle Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-col items-center gap-1.5 text-stone-600 text-sm"
      >
        <span>Scroll down</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-stone-500" />
      </motion.div>
    </section>
  );
}
