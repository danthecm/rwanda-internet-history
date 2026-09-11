import TimelinePhaseCard from "~/components/ui/timeline-phase-card";
import SectionHeading from "~/components/ui/section-heading";
import { MOBILE_EVOLUTION } from "~/data/infrastructure";

export default function MobileEvolutionSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-[1152px]">
          <SectionHeading
            variant="leftPrimary"
            eyebrow={MOBILE_EVOLUTION.eyebrow}
            title={MOBILE_EVOLUTION.title}
          />

          <div className="mt-6.5 grid gap-6 md:mt-12 lg:grid-cols-3">
            {MOBILE_EVOLUTION.phases.map((item) => (
              <TimelinePhaseCard key={item.phase} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
