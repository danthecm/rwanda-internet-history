import SectionHeading from "~/components/ui/section-heading";
import StatCard from "~/components/ui/stat-card";
import { HEALTHCARE } from "~/data/metrics";

export default function HealthcareSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-[1152px]">
          <SectionHeading
            variant="leftHighlight"
            eyebrow={HEALTHCARE.eyebrow}
            title={HEALTHCARE.title}
          >
            {HEALTHCARE.lead}
          </SectionHeading>

          <div className="mt-8 grid gap-6 md:mt-12 lg:grid-cols-3">
            {HEALTHCARE.sectors.map((sector) => (
              <StatCard
                key={sector.title}
                variant="inset"
                kicker={sector.kicker}
                title={sector.title}
                stat={sector.stat}
              >
                {sector.body}
              </StatCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
