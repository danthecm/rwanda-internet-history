import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import AdoptionSection from "~/components/metrics/AdoptionSection";
import ClassroomSection from "~/components/metrics/ClassroomSection";
import ForwardSection from "~/components/metrics/ForwardSection";
import HealthcareSection from "~/components/metrics/HealthcareSection";
import IremboSection from "~/components/metrics/IremboSection";
import NextChapterSection from "~/components/ui/NextChapterSection";
import PageHero from "~/components/ui/PageHero";
import StatsPanel from "~/components/ui/StatsPanel";
import { METRICS_STATS } from "~/data/metrics";

const MetricsPage = () => {
  return (
    <>
      <PageHero
        content={{
          eyebrow:
            "Digital Public Services · Educational Initiatives · Inclusion",
          title: "Empowering Rwanda",
          lead: "From classrooms and clinics to pocket governance: how broadband infrastructure sparked economic modernization, and the ongoing challenge of turning 98.5% network coverage into everyday adoption.",
        }}
        accent={{
          badge: "border-secondary/30 bg-secondary/30",
          text: "text-secondary",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1045px] px-4 md:-mt-[56px] md:px-8 lg:-mt-[72px] xl:-mt-[90px]">
        <StatsPanel stats={METRICS_STATS} />
      </div>

      <ClassroomSection />
      <HealthcareSection />
      <IremboSection />
      <AdoptionSection />
      <ForwardSection />
      <NextChapterSection
        eyebrow="REVIEW THE FOUNDATION"
        eyebrowIcon={faClockRotateLeft}
        title={[
          { text: "See the roadmap that" },
          { break: true },
          { text: "made this possible." },
        ]}
        lead="Review Policy History — Vision 2020 foundations and NICI strategic phases."
        cta={{ label: "Back to Policy History", to: "/" }}
      />
    </>
  );
};

export default MetricsPage;
