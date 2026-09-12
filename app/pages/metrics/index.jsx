import ClassroomSection from "~/components/metrics/classroom-section";
import HealthcareSection from "~/components/metrics/healthcare-section";
import Hero from "~/components/metrics/hero";
import IremboSection from "~/components/metrics/irembo-section";
import StatsPanel from "~/components/ui/stats-panel";
import { STATS } from "~/data/metrics";

export default function MetricsPage() {
  return (
    <>
      <Hero />

      <div
        id={STATS.id}
        className="relative z-10 mx-auto w-full max-w-[1045px] px-4 md:-mt-[56px] md:px-8 lg:-mt-[72px] xl:-mt-[90px]"
      >
        <StatsPanel stats={STATS.items} variant="compact" />
      </div>

      <ClassroomSection />
      <HealthcareSection />
      <IremboSection />
    </>
  );
}
