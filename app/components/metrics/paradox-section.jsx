import { useCallback } from "react";

import ChartCanvas from "~/components/metrics/chart-canvas";
import buildDonutOption from "~/components/metrics/donut-option";
import buildInequityOption from "~/components/metrics/inequity-option";
import Icon from "~/components/ui/icon";
import NumberedItem from "~/components/ui/numbered-item";
import PanelCard from "~/components/ui/panel-card";
import RichText from "~/components/ui/rich-text";
import SectionHeading from "~/components/ui/section-heading";
import { PARADOX } from "~/data/metrics";

const TONE_TEXT = {
  highlight: "text-highlight",
  muted: "text-muted",
};

/** @param {{ donut: typeof PARADOX.coverage.donuts[number] }} props */
function Donut({ donut }) {
  const buildOption = useCallback(
    ({ reduceMotion }) =>
      buildDonutOption({
        value: donut.value,
        display: donut.display,
        tone: donut.tone,
        reduceMotion,
      }),
    [donut],
  );

  return (
    <div className="flex flex-1 flex-col items-center">
      <ChartCanvas
        buildOption={buildOption}
        label={`${donut.display} ${donut.label}`}
        className="size-[108px]"
      />
      <p className="pt-3 text-center font-display text-[13px] leading-[19.5px] font-normal text-muted">
        {donut.label}
      </p>
    </div>
  );
}

/** @param {{ bar: typeof PARADOX.inequity.bars[number] }} props */
function Bar({ bar }) {
  const buildOption = useCallback(
    ({ reduceMotion }) =>
      buildInequityOption({ value: bar.value, tone: bar.tone, reduceMotion }),
    [bar],
  );

  return (
    <div>
      <div className="flex items-center justify-between">
        <p
          className={`flex items-center gap-2 font-display text-[15px] leading-[22.5px] font-normal ${bar.tone === "highlight" ? "text-white" : "text-muted"}`}
        >
          <span aria-hidden="true" className={TONE_TEXT[bar.tone]}>
            <Icon icon={bar.icon} />
          </span>
          {bar.label}
        </p>
        <p
          className={`font-display text-lg leading-[27px] font-bold ${TONE_TEXT[bar.tone]}`}
        >
          {bar.display}
        </p>
      </div>
      <ChartCanvas
        buildOption={buildOption}
        label={`${bar.label}: ${bar.display}`}
        className="mt-2 h-2 w-full"
      />
    </div>
  );
}

export default function ParadoxSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-[1152px]">
          <SectionHeading
            variant="leftHighlight"
            eyebrow={PARADOX.eyebrow}
            title={PARADOX.title}
          >
            {PARADOX.lead}
          </SectionHeading>

          <div className="mt-8 grid gap-6 md:mt-12 lg:grid-cols-3">
            <PanelCard
              title={PARADOX.coverage.title}
              footer={
                <p className="text-center font-display text-[13px] leading-[21px] font-normal text-muted">
                  {PARADOX.coverage.footnote}
                </p>
              }
            >
              <div className="flex gap-4">
                {PARADOX.coverage.donuts.map((donut) => (
                  <Donut key={donut.label} donut={donut} />
                ))}
              </div>
            </PanelCard>

            <PanelCard
              title={PARADOX.inequity.title}
              footer={
                <>
                  <p className="font-display text-sm leading-[22.75px] font-normal text-muted">
                    {PARADOX.inequity.footnote}
                  </p>
                  <p className="pt-1.5 font-display text-sm leading-[21px] font-bold text-white">
                    <RichText segments={PARADOX.inequity.emphasis} />
                  </p>
                </>
              }
            >
              <div className="flex flex-col gap-6">
                {PARADOX.inequity.bars.map((bar) => (
                  <Bar key={bar.label} bar={bar} />
                ))}
              </div>
            </PanelCard>

            <PanelCard title={PARADOX.barriers.title}>
              <ol className="flex flex-col gap-4">
                {PARADOX.barriers.items.map((item, index) => (
                  <NumberedItem
                    key={item.title}
                    index={String(index + 1).padStart(2, "0")}
                    title={item.title}
                  >
                    {item.body}
                  </NumberedItem>
                ))}
              </ol>
            </PanelCard>
          </div>
        </div>
      </div>
    </section>
  );
}
