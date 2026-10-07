import { ScrollSkyBackground } from "@/components/ScrollSkyBackground";
import { HeroSection } from "@/components/HeroSection";
import { TheTrailSection } from "@/components/TheTrailSection";
import { LettersSection } from "@/components/LettersSection";
import { ThingsINoticedSection } from "@/components/ThingsINoticedSection";
import { ReachTheSummitGame } from "@/components/ReachTheSummitGame";
import { FinaleSection } from "@/components/FinaleSection";

export default function Home() {
  return (
    <main className="relative min-h-screen text-stone-900 selection:bg-amber-400/30 overflow-x-hidden">
      {/* Scroll-Driven Day-To-Sunset Sky Background */}
      <ScrollSkyBackground />

      {/* Single Centered Column with Consistent Rhythm */}
      <div className="relative z-10 w-full">
        {/* 1. Hero: Dawn */}
        <HeroSection />

        {/* 2. The Trail Back: Morning */}
        <TheTrailSection />

        {/* 3. A Few Notes For You: Midday */}
        <LettersSection />

        {/* 4. Things I've Noticed About You: Afternoon */}
        <ThingsINoticedSection />

        {/* 5. Mini Game: Reach the Summit: Late Afternoon */}
        <ReachTheSummitGame />

        {/* 6. Our Next Trek Finale: Sunset */}
        <FinaleSection />
      </div>
    </main>
  );
}
