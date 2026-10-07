"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tent, TrendingUp, Sun, Footprints, Mountain } from "lucide-react";
import { content } from "@/data/content";

const checkpointIcons: Record<string, React.ElementType> = {
  Tent,
  TrendingUp,
  Sun,
  Footprints,
  Mountain,
};

export function TheTrailSection() {
  const { trail } = content;

  return (
    <section
      aria-label="The Trail Back"
      className="max-w-md sm:max-w-lg mx-auto px-6 py-24"
    >
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
          The Trail Back
        </h2>
        <p className="text-base text-stone-700">
          Small steps, at your own pace.
        </p>
      </div>

      {/* Simple Vertical Path */}
      <div className="relative pl-7 space-y-6 before:absolute before:left-2 before:top-4 before:bottom-4 before:w-0.5 before:bg-stone-300">
        {trail.map((item, idx) => {
          const Icon = checkpointIcons[item.icon] || Mountain;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative"
            >
              {/* Marker Dot */}
              <span className="absolute -left-[31px] top-5 w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow-xs" />

              {/* Checkpoint Card */}
              <div className="trail-card p-5">
                <div className="flex items-center gap-2 mb-1.5 text-amber-800">
                  <Icon className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <h3 className="text-base font-semibold text-stone-900">
                    {item.name}
                  </h3>
                </div>
                <p className="text-base text-stone-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
