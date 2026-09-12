import { useCallback } from "react";

import ChartCanvas from "~/components/metrics/chart-canvas";
import buildDeploymentOption from "~/components/metrics/deployment-option";
import MediaCard from "~/components/ui/media-card";
import SectionHeading from "~/components/ui/section-heading";
import { CLASSROOM } from "~/data/metrics";

export default function ClassroomSection() {
  const buildOption = useCallback(
    ({ reduceMotion }) =>
      buildDeploymentOption({ points: CLASSROOM.chart.points, reduceMotion }),
    [],
  );

  return (
    <section className="w-full py-16 md:py-24">
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-[1152px]">
          <SectionHeading
            variant="leftHighlight"
            eyebrow={CLASSROOM.eyebrow}
            title={CLASSROOM.title}
          >
            {CLASSROOM.lead}
          </SectionHeading>

          <div className="mt-8 grid gap-6 md:mt-12 lg:grid-cols-2">
            <MediaCard
              src={CLASSROOM.photo.image}
              alt={CLASSROOM.photo.imageAlt}
              credit={CLASSROOM.photo.credit}
              variant="gradient"
              className="h-[420px] border border-card-rule lg:h-full"
            >
              <p className="font-display text-[11px] leading-4 font-semibold tracking-[1.32px] text-highlight">
                {CLASSROOM.photo.kicker}
              </p>
              <h3 className="pt-2.5 font-display text-2xl leading-[28.8px] font-black tracking-[-0.24px] text-white">
                {CLASSROOM.photo.title}
              </h3>
              <p className="max-w-[440px] pt-2.5 font-display text-sm leading-[23px] font-normal text-muted-lighter">
                {CLASSROOM.photo.body}
              </p>
            </MediaCard>

            <div className="flex flex-col rounded-[20px] border border-card-rule bg-card p-8">
              <div className="grid grid-cols-2 gap-6">
                {CLASSROOM.stats.map((stat) => (
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
                {CLASSROOM.body}
              </p>

              <div className="mt-auto pt-8">
                <div className="rounded-xl border border-card-rule bg-surface-2 p-6">
                  <p className="font-display text-[11px] leading-4 font-semibold tracking-[1.32px] text-highlight">
                    {CLASSROOM.chart.title}
                  </p>
                  <ChartCanvas
                    buildOption={buildOption}
                    label={CLASSROOM.chart.label}
                    className="mt-4 h-[227px] w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
