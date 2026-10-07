"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flower2,
  Droplets,
  Camera,
  Flag,
  Footprints,
  RotateCcw,
  Sparkles,
  Mountain,
} from "lucide-react";
import { content, GameCollectible } from "@/data/content";

const collectibleIcons: Record<string, React.ElementType> = {
  Flower2,
  Droplets,
  Camera,
  Flag,
};

export function ReachTheSummitGame() {
  const { summitGame } = content;
  const { totalSteps, collectibles, completionMessage } = summitGame;

  const [currentStep, setCurrentStep] = useState(0);
  const [activeNote, setActiveNote] = useState<GameCollectible | null>(null);

  const isSummitReached = currentStep >= totalSteps;

  const takeStep = () => {
    if (isSummitReached) return;

    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);

    // Check if this step lands on a collectible
    const found = collectibles.find((c) => c.step === nextStep);
    if (found) {
      setActiveNote(found);
    }
  };

  const resetGame = () => {
    setCurrentStep(0);
    setActiveNote(null);
  };

  // Progress percentage (0 to 100%)
  const progressPercent = Math.min(100, Math.round((currentStep / totalSteps) * 100));

  return (
    <section
      aria-label="Reach the Summit Mini Game"
      className="max-w-md sm:max-w-lg mx-auto px-6 py-24"
    >
      <div className="text-center mb-10 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
          {summitGame.title}
        </h2>
        <p className="text-base text-stone-700">
          {summitGame.subtitle}
        </p>
      </div>

      <div className="trail-card p-6 overflow-hidden space-y-6">
        {/* Progress Bar & Header */}
        <div className="flex items-center justify-between text-sm text-stone-600 font-medium">
          <span className="flex items-center gap-1.5 text-stone-800">
            <Mountain className="w-4 h-4 text-amber-600" />
            <span>Path to Summit</span>
          </span>
          <span>
            {isSummitReached ? "Summit reached" : `Step ${currentStep} of ${totalSteps}`}
          </span>
        </div>

        {/* Trail Ascent Visualization */}
        <div
          onClick={takeStep}
          className="relative h-44 rounded-2xl bg-gradient-to-b from-sky-100 via-amber-50 to-emerald-50 border border-amber-200/50 p-4 overflow-hidden select-none cursor-pointer flex flex-col justify-between"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              takeStep();
            }
          }}
          aria-label="Tap to take a step on the trail"
        >
          {/* Subtle Mountain Silhouette in Background */}
          <svg
            className="absolute bottom-0 inset-x-0 w-full h-28 opacity-25 text-emerald-800 fill-current pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 400 150"
          >
            <path d="M0,150 L60,80 L140,110 L220,50 L310,95 L400,20 L400,150 Z" />
          </svg>

          {/* Collectible Markers along the trail path */}
          <div className="absolute inset-x-6 top-8 bottom-8 flex justify-between items-center pointer-events-none">
            {collectibles.map((col) => {
              const Icon = collectibleIcons[col.icon] || Sparkles;
              const isPassed = currentStep >= col.step;

              return (
                <div
                  key={col.step}
                  className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                    isPassed ? "scale-110 text-amber-600" : "opacity-40 text-stone-400"
                  }`}
                  style={{
                    transform: `translateY(${-((col.step / totalSteps) * 40 - 20)}px)`,
                  }}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center border shadow-xs ${
                      isPassed
                        ? "bg-amber-100 border-amber-400"
                        : "bg-white/80 border-stone-300"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hiker Position (Rises with step progress) */}
          <div
            className="relative z-10 transition-all duration-300 flex items-center gap-2"
            style={{
              transform: `translate(${progressPercent * 0.72}%, ${
                100 - progressPercent * 0.9
              }px)`,
            }}
          >
            <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-md animate-bounce [animation-duration:1.8s]">
              <Footprints className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-stone-700 bg-white/90 px-2 py-0.5 rounded-md shadow-xs hidden sm:inline">
              Alisha
            </span>
          </div>

          {/* Bottom Tap Instruction */}
          <div className="relative z-10 text-center text-xs text-stone-500 font-medium pt-1">
            {isSummitReached ? "Standing above the clouds" : "Tap anywhere on the path to take a step"}
          </div>
        </div>

        {/* Milestone Note Card (Revealed on collectible) */}
        <AnimatePresence>
          {activeNote && !isSummitReached && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="p-4 rounded-xl bg-amber-50/90 border border-amber-200/80 space-y-2"
            >
              <div className="flex items-center gap-2 text-amber-900 font-semibold text-sm">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Found: {activeNote.name}</span>
              </div>
              <p className="font-caveat text-xl text-stone-800 leading-snug">
                &ldquo;{activeNote.note}&rdquo;
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Summit Celebration Card */}
        {isSummitReached && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-5 rounded-xl bg-amber-100/80 border border-amber-300 text-center space-y-2"
          >
            <div className="inline-flex items-center gap-2 text-amber-900 font-bold text-base">
              <Mountain className="w-5 h-5 text-amber-700" />
              <span>{completionMessage}</span>
            </div>
            <p className="text-sm text-stone-700">
              You walked the whole path, one calm step at a time.
            </p>
          </motion.div>
        )}

        {/* Main Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          {!isSummitReached ? (
            <button
              onClick={takeStep}
              className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-[0.98] text-stone-950 font-bold text-base shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Footprints className="w-4 h-4" />
              <span>Tap to step forward ({totalSteps - currentStep} left)</span>
            </button>
          ) : (
            <button
              onClick={resetGame}
              className="w-full py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-100 font-medium text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Walk the trail again</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
