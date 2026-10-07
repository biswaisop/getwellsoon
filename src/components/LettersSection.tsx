"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { content } from "@/data/content";

export function LettersSection() {
  const { letters } = content;
  const [openId, setOpenId] = useState<string | null>("rest");

  const toggleLetter = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      aria-label="Letters"
      className="max-w-md sm:max-w-lg mx-auto px-6 py-24"
    >
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
          A Few Notes For You
        </h2>
        <p className="text-base text-stone-700">
          Tap whenever you feel like reading one.
        </p>
      </div>

      <div className="space-y-4">
        {letters.map((letter, idx) => {
          const isOpen = openId === letter.id;

          return (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="trail-card overflow-hidden transition-shadow"
            >
              <button
                onClick={() => toggleLetter(letter.id)}
                className="w-full p-5 text-left flex items-center justify-between cursor-pointer group"
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold text-stone-900 group-hover:text-amber-800 transition-colors">
                  {letter.title}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-stone-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-amber-700" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className="px-5 pb-5 pt-1 border-t border-stone-200/60">
                      <p className="font-caveat text-xl sm:text-2xl text-stone-800 leading-relaxed whitespace-pre-line">
                        {letter.message}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
