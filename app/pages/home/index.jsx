import Hero from "~/components/policy/hero";
import LeapfrogSection from "~/components/policy/leapfrog-section";
import MilestonesSection from "~/components/policy/milestones-section";
import NextChapterSection from "~/components/policy/next-chapter-section";
import NiciSection from "~/components/policy/nici-section";
import PillarsSection from "~/components/policy/pillars-section";
import VisionSection from "~/components/policy/vision-section";
import StatsPanel from "~/components/ui/stats-panel";
import { STATS } from "~/data/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="relative z-10 mx-auto w-full max-w-[1045px] px-4 md:-mt-[63px] md:px-8">
        <StatsPanel stats={STATS} />
      </div>
      <div className="mt-12 md:mt-[49px]">
        <LeapfrogSection />
      </div>
      <div className="mt-12 md:mt-[60px]">
        <VisionSection />
      </div>
      <div className="mt-10">
        <PillarsSection />
      </div>
      <div className="mt-12 md:mt-16">
        <NiciSection />
      </div>
      <div className="mt-12 md:mt-[108px]">
        <MilestonesSection />
      </div>
      <div className="mt-12 pb-16 md:mt-[65px] md:pb-[69px]">
        <NextChapterSection />
      </div>
    </>
  );
}
