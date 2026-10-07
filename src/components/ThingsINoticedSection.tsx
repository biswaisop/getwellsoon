"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flame, Sparkles, Compass, Heart } from "lucide-react";
import { content } from "@/data/content";

const noticedIcons: Record<string, React.ElementType> = {
  Flame,
  Sparkles,
  Compass,
  Heart,
};

export function ThingsINoticedSection() {
  const { noticedCards } = content;

  return (
    <section
      aria-label="Things I've Noticed About You"
      className="max-w-md sm:max-w-lg mx-auto px-6 py-24"
    >
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
          Things I&apos;ve Noticed About You
        </h2>
        <p className="text-base text-stone-700">
          Just a few things that made an impression on me.
        </p>
      </div>

      <div className="space-y-4">
        {noticedCards.map((card, idx) => {
          const Icon = noticedIcons[card.icon] || Sparkles;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="trail-card p-5 transition-shadow"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-xl bg-amber-100/80 text-amber-800 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-amber-700" />
                </div>
                <h3 className="text-base font-semibold text-stone-900">
                  {card.title}
                </h3>
              </div>
              <p className="text-base text-stone-700 leading-relaxed pl-10">
                {card.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
