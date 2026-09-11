import Hero from "~/components/policy/hero";
import LeapfrogSection from "~/components/policy/leapfrog-section";
import NiciSection from "~/components/policy/nici-section";
import PillarsSection from "~/components/policy/pillars-section";
import VisionSection from "~/components/policy/vision-section";
import StatsPanel from "~/components/ui/stats-panel";
import { STATS } from "~/data/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Straddles the hero edge as in the comp: panel top y=779, hero bottom y=842. */}
      <div className="relative z-10 mx-auto w-full max-w-[1045px] px-4 md:-mt-[63px] md:px-8">
        <StatsPanel stats={STATS} />
      </div>
      <div className="mt-12 md:mt-[49px]">
        <LeapfrogSection />
      </div>
      {/* PolicyPage starts at y=1666 in the comp, 60px below the media block. */}
      <div className="mt-12 md:mt-[60px]">
        <VisionSection />
      </div>
      <div className="mt-10">
        <PillarsSection />
      </div>
      {/* STRATEGIC FRAMEWORK opens at y=2310 in the comp, 64px below the pillar
          grid; the rest of the lead-in is the section's own top padding. */}
      <div className="mt-12 md:mt-16">
        <NiciSection />
      </div>
    </>
  );
}
