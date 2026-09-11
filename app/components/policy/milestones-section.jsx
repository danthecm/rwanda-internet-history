import MilestoneItem from "~/components/ui/milestone-item";
import SectionHeading from "~/components/ui/section-heading";
import { MILESTONES, MILESTONES_HEADING } from "~/data/home";

export default function MilestonesSection() {
  return (
    <section className="w-full">
      <div className="px-4 md:px-8">
        <div className="relative mx-auto max-w-[1062px] overflow-hidden rounded-[50px] bg-milestone px-6 pt-[60px] pb-10 md:px-[45px]">
          <div
            aria-hidden="true"
            className="milestones-glow pointer-events-none absolute -left-[463px] bottom-0 h-[446px] w-[596px] max-w-none"
          />

          <div className="relative">
            <SectionHeading
              variant="centeredGold"
              eyebrow={MILESTONES_HEADING.eyebrow}
              title={MILESTONES_HEADING.title}
            />

            <ul className="mx-auto mt-10 max-w-[972px]">
              {MILESTONES.map((item) => (
                <MilestoneItem
                  key={item.year}
                  year={item.year}
                  title={item.title}
                >
                  {item.body}
                </MilestoneItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
