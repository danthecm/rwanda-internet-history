import SectionHeading from "~/components/ui/SectionHeading";
import SectionWrapper from "~/components/ui/SectionWrapper";
import { NICI_PHASES } from "~/data/home";

const PhaseCard = ({ phase, period, title, children }) => {
  return (
    <article className="flex flex-col rounded-2xl bg-phase px-6.25 py-5.5 transition-colors duration-200 hover:bg-phase-hover">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded bg-white/6 px-2 py-1 font-display text-xs leading-4 font-black text-muted">
          {phase}
        </span>
        <span className="font-display text-xs leading-4 font-medium text-muted">
          {period}
        </span>
      </div>

      <h3 className="pt-4 font-display text-lg leading-7 font-bold text-white">
        {title}
      </h3>

      <p className="pt-3 font-display text-sm leading-[22.75px] font-normal text-muted">
        {children}
      </p>
    </article>
  );
};

const NICISection = () => {
  return (
    <SectionWrapper className="relative mt-12 w-full overflow-hidden py-16 md:mt-16 md:pt-[98px] md:pb-[89px]">
      <SectionHeading
        variant="left"
        eyebrow="THE 5-YEAR IMPLEMENTATION ENGINES"
        title="NICI Phases"
      >
        Vision 2020 set the 20-year goal; the National Information and
        Communications Infrastructure (NICI) plans were the four 5-year roadmaps
        built to execute it step by step.
      </SectionHeading>

      <div className="relative mx-auto mt-12 max-w-[1071px] md:mt-[73px]">
        <div
          aria-hidden="true"
          className="nici-glow pointer-events-none absolute top-0 left-1/2 h-[493px] w-[1651px] max-w-none -translate-x-1/2"
        />
        <div className="relative grid gap-x-[35px] gap-y-[34px] md:grid-cols-2">
          {NICI_PHASES.map((item) => (
            <PhaseCard
              key={item.phase}
              phase={item.phase}
              period={item.period}
              title={item.title}
            >
              {item.body}
            </PhaseCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default NICISection;
