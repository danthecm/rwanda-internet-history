import heroBg from "~/assets/images/hero-bg.webp";
import LeapfrogSection from "~/components/policy/LeapfrogSection";
import MilestonesSection from "~/components/policy/MilestonesSection";
import NICISection from "~/components/policy/NICISection";
import VisionPillarsSection from "~/components/policy/VisionPillarsSection";
import NextChapterSection from "~/components/ui/NextChapterSection";
import PageHero from "~/components/ui/PageHero";
import StatsPanel from "~/components/ui/StatsPanel";
import { POLICY_STATS, VISION_ID } from "~/data/home";

const HomePage = () => {
  return (
    <>
      <PageHero
        bgImage={heroBg}
        align="left"
        content={{
          eyebrow: "Policy Foundations · 1994–2010",
          title: (
            <>
              Rwanda&apos;s Digital <br />
              <span className="text-primary">Evolution</span>
            </>
          ),
          lead: "Starting from ground zero after 1994, Rwanda chose telecommunications and digital infrastructure as the foundation to rebuild its national economy.",
          cta: { label: "Explore Policy History", href: `#${VISION_ID}` },
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-[1045px] px-4 md:-mt-[63px] md:px-8">
        <StatsPanel stats={POLICY_STATS} />
      </div>
      <LeapfrogSection />
      <VisionPillarsSection />
      <NICISection />
      <MilestonesSection />
      <NextChapterSection
        title={[
          { text: "See how policy paved the way" },
          { break: true },
          { text: "for infrastructure." },
        ]}
        cta={{
          label: "Next: Infrastructure Details",
          to: "/infrastructure",
        }}
        maxWidth="max-w-[1240px]"
      />
    </>
  );
};

export default HomePage;
