import SectionHeading from "~/components/ui/SectionHeading";
import SectionWrapper from "~/components/ui/SectionWrapper";
import StatCard from "~/components/ui/StatCard";
import { NETWORK_COMPONENTS, NETWORK_DATA_ID } from "~/data/infrastructure";

const NetworkComponentsSection = () => {
  return (
    <SectionWrapper id={NETWORK_DATA_ID} maxWidth="max-w-[1152px]">
      <SectionHeading
        variant="leftPrimary"
        eyebrow="NETWORK TOPOLOGY"
        title="Network Components"
      />

      <div className="mt-6.5 grid gap-px bg-card-rule md:mt-12 lg:grid-cols-3">
        {NETWORK_COMPONENTS.map((item) => (
          <StatCard
            key={item.title}
            icon={item.icon}
            kicker={item.kicker}
            title={item.title}
            stat={item.stat}
          >
            {item.body}
          </StatCard>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default NetworkComponentsSection;
