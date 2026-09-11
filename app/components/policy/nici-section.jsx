import PhaseCard from "~/components/ui/phase-card";
import SectionHeading from "~/components/ui/section-heading";
import { NICI, NICI_PHASES } from "~/data/home";

export default function NiciSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:pt-[98px] md:pb-[89px]">
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeading
            variant="left"
            eyebrow={NICI.eyebrow}
            title={NICI.title}
          >
            {NICI.body}
          </SectionHeading>
        </div>

        {/* The grid sits in a narrower column than the heading, as in the comp. */}
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
      </div>
    </section>
  );
}
