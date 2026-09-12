import SectionHeading from "~/components/ui/SectionHeading";
import SectionWrapper from "~/components/ui/SectionWrapper";
import { MILESTONES } from "~/data/home";

const MilestoneItem = ({ year, title, children }) => {
  return (
    <li className="flex items-start gap-4 md:gap-10">
      <p className="w-[62px] shrink-0 pt-8 text-right font-display text-2xl leading-8 font-black text-foreground">
        {year}
      </p>

      <div aria-hidden="true" className="shrink-0 pt-10">
        <div className="size-4 rounded-full border-2 border-secondary bg-foreground ring-4 ring-ember/10" />
      </div>

      <div className="min-w-0 flex-1 border-b border-card-rule pt-6 pb-8">
        <h3 className="font-display text-lg leading-7 font-bold text-secondary">
          {title}
        </h3>
        <p className="pt-2 font-display text-base leading-[22.75px] font-normal text-foreground">
          {children}
        </p>
      </div>
    </li>
  );
};

const MilestonesSection = () => {
  return (
    <SectionWrapper
      className="mt-12 w-full md:mt-[108px]"
      maxWidth="max-w-[1062px]"
      innerClassName="relative overflow-hidden rounded-[50px] bg-milestone px-6 pt-[60px] pb-10 md:px-[45px]"
    >
      <div
        aria-hidden="true"
        className="milestones-glow pointer-events-none absolute -left-[463px] bottom-0 h-[446px] w-[596px] max-w-none"
      />

      <div className="relative">
        <SectionHeading
          variant="centeredGold"
          eyebrow="INSTITUTIONAL MILESTONES"
          title="The Rules & Gateways"
        />

        <ul className="mx-auto mt-10 max-w-[972px]">
          {MILESTONES.map((item) => (
            <MilestoneItem key={item.year} year={item.year} title={item.title}>
              {item.body}
            </MilestoneItem>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default MilestonesSection;
