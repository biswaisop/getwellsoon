"use client";

import React from "react";
import { motion } from "framer-motion";
import { Moon, Heart } from "lucide-react";
import { content } from "@/data/content";

export function FinaleSection() {
  const { ending } = content;

  return (
    <section
      aria-label="Ending"
      className="max-w-md sm:max-w-lg mx-auto px-6 py-24 pb-32 text-center"
    >
      {/* Evening Badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-200 text-xs font-medium tracking-wide mb-6 backdrop-blur-sm"
      >
        <Moon className="w-3.5 h-3.5 text-amber-300" />
        <span>Evening Campsite • Twilight</span>
      </motion.div>

      {/* Heading & Subheading */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-2 mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-sm">
          {ending.heading}
        </h2>
        <p className="text-base text-stone-200 leading-relaxed font-normal">
          {ending.subheading}
        </p>
      </motion.div>

      {/* Handwritten Letter Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="trail-card p-6 sm:p-8 text-left space-y-5"
      >
        <div className="space-y-4 font-caveat text-2xl sm:text-3xl text-stone-800 leading-relaxed">
          {ending.paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Closing & Signature */}
        <div className="pt-4 border-t border-stone-200/60 font-caveat text-xl sm:text-2xl text-stone-900">
          <p>{ending.closing}</p>
          <p className="text-2xl sm:text-3xl text-amber-900 font-bold mt-1">
            {ending.signature}
          </p>
        </div>
      </motion.div>

      {/* Bedtime Gentle Whisper */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 inline-flex items-center gap-1.5 text-xs text-amber-200/90 font-medium"
      >
        <Heart className="w-3.5 h-3.5 text-amber-300" />
        <span>{ending.bedtimeNote}</span>
      </motion.div>

      <footer className="mt-16 text-center text-xs text-stone-400">
        <p>The Trail Back • For Alisha</p>
      </footer>
    </section>
  );
}
