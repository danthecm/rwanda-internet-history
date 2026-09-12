import { useCallback } from "react";

import olpcKagugu from "~/assets/images/olpc-kagugu-2008.webp";
import ChartCanvas from "~/components/metrics/ChartCanvas";
import MediaCard from "~/components/ui/MediaCard";
import SectionHeading from "~/components/ui/SectionHeading";
import SectionWrapper from "~/components/ui/SectionWrapper";
import { CLASSROOM_CHART_POINTS, CLASSROOM_STATS } from "~/data/metrics";
import buildDeploymentOption from "~/lib/charts/deployment-option";

const ClassroomSection = () => {
  const buildOption = useCallback(
    ({ reduceMotion }) =>
      buildDeploymentOption({ points: CLASSROOM_CHART_POINTS, reduceMotion }),
    [],
  );

  return (
    <SectionWrapper maxWidth="max-w-[1152px]">
      <SectionHeading
        variant="leftHighlight"
        eyebrow="HUMAN CAPITAL & DIGITAL SKILLS"
        title="Classroom Digitization: Building a Tech-Literate Generation"
      >
        Rather than waiting for adult workforces to adapt, Rwanda introduced
        personal computing directly into primary classrooms to build digital
        skills from childhood.
      </SectionHeading>

      <div className="mt-8 grid gap-6 md:mt-12 lg:grid-cols-2">
        <MediaCard
          src={olpcKagugu}
          alt="Pupils at Kagugu Primary School in Kigali using OLPC XO laptops during a digital literacy lesson in 2008"
          credit={{ label: "Photo: MINEDUC / OLPC Rwanda Archive" }}
          variant="gradient"
          className="h-[420px] border border-card-rule lg:h-full"
        >
          <p className="font-display text-[11px] leading-4 font-semibold tracking-[1.32px] text-highlight">
            NATIONWIDE PROGRAM • 2008
          </p>
          <h3 className="pt-2.5 font-display text-2xl leading-[28.8px] font-black tracking-[-0.24px] text-white">
            One Laptop per Child (OLPC)
          </h3>
          <p className="max-w-[440px] pt-2.5 font-display text-sm leading-[23px] font-normal text-muted">
            Pupils at Kagugu Primary School in Kigali receiving early digital
            literacy training.
          </p>
        </MediaCard>

        <div className="flex flex-col rounded-[20px] border border-card-rule bg-card p-8">
          <div className="grid grid-cols-2 gap-6">
            {CLASSROOM_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-lg leading-7 font-black text-secondary">
                  {stat.value}
                </p>
                <p className="pt-1.5 font-display text-sm leading-5 font-normal text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="pt-7 font-display text-sm leading-[26px] font-normal text-muted">
            Distributed rugged XO laptops to primary pupils nationwide with zero
            prior digital exposure, establishing foundational computing skills
            before scaling into secondary-level Smart Classrooms across all 30
            districts.
          </p>

          <div className="mt-auto pt-8">
            <div className="rounded-xl border border-card-rule bg-surface-2 p-6">
              <p className="font-display text-[11px] leading-4 font-semibold tracking-[1.32px] text-highlight">
                YEAR-BY-YEAR DEPLOYMENT PROGRESSION
              </p>
              <ChartCanvas
                buildOption={buildOption}
                label="Bar chart of OLPC laptop deployment in Rwanda: 8,000 in 2008, 25,000 in 2009, 55,000 in 2010, 85,000 in 2011, and over 115,000 by 2012."
                className="mt-4 h-[227px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ClassroomSection;
