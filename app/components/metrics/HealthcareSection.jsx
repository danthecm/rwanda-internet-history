import SectionHeading from "~/components/ui/SectionHeading";
import SectionWrapper from "~/components/ui/SectionWrapper";
import StatCard from "~/components/ui/StatCard";
import { HEALTHCARE_SECTORS } from "~/data/metrics";

const HealthcareSection = () => {
  return (
    <SectionWrapper maxWidth="max-w-[1152px]">
      <SectionHeading
        variant="leftHighlight"
        eyebrow="PUBLIC HEALTH INFRASTRUCTURE"
        title="Connected Healthcare: Linking Regional Clinics to the National Grid"
      >
        How running 3,000+ km of fiber cables into rural districts replaced
        paper patient records and connected remote health clinics to national
        referral specialists.
      </SectionHeading>

      <div className="mt-8 grid gap-6 md:mt-12 lg:grid-cols-3">
        {HEALTHCARE_SECTORS.map((sector) => (
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
    </SectionWrapper>
  );
};

export default HealthcareSection;
