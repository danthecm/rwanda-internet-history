import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeading from "~/components/ui/SectionHeading";
import SectionWrapper from "~/components/ui/SectionWrapper";
import { PILLARS, VISION_ID } from "~/data/home";

const ACCENT_CLASS = {
  highlight: { icon: "text-highlight", rule: "bg-highlight" },
  secondary: { icon: "text-secondary", rule: "bg-secondary" },
  green: { icon: "text-pillar-green", rule: "bg-pillar-green" },
};

const PillarCard = ({ icon, title, accent = "highlight", children }) => {
  const styles = ACCENT_CLASS[accent] ?? ACCENT_CLASS.highlight;

  return (
    <div className="flex flex-col bg-card p-8">
      <p aria-hidden="true" className={`text-[30px] leading-9 ${styles.icon}`}>
        <FontAwesomeIcon icon={icon} />
      </p>

      <div aria-hidden="true" className={`mt-5 h-0.5 w-8 ${styles.rule}`} />

      <h3 className="mt-4 font-display text-xl leading-7 font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 font-display text-sm leading-[22.75px] font-normal text-muted">
        {children}
      </p>
    </div>
  );
};

const VisionPillarsSection = () => {
  return (
    <SectionWrapper
      id={VISION_ID}
      className="mt-12 w-full scroll-mt-12 md:mt-[60px]"
    >
      <SectionHeading eyebrow="THE 20-YEAR DESTINATION" title="Vision 2020">
        Vision 2020 was the master ambition launched in 2000 to transform Rwanda
        from subsistence farming into a modern, thriving{" "}
        <span className="font-semibold text-white">
          &quot;knowledge-based&quot; economy
        </span>{" "}
        — where people use technology, skills, and innovation to create wealth
        and improve daily life.
      </SectionHeading>

      <div className="mt-10 grid gap-px bg-card-rule md:grid-cols-3">
        {PILLARS.map((pillar) => (
          <PillarCard
            key={pillar.title}
            icon={pillar.icon}
            title={pillar.title}
            accent={pillar.accent}
          >
            {pillar.body}
          </PillarCard>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default VisionPillarsSection;
