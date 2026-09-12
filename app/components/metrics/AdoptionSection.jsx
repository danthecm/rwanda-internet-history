import { useCallback } from "react";

import ChartCanvas from "~/components/metrics/ChartCanvas";
import buildDonutOption from "~/lib/charts/donut-option";
import buildInequityOption from "~/lib/charts/inequity-option";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeading from "~/components/ui/SectionHeading";
import SectionWrapper from "~/components/ui/SectionWrapper";
import {
  ADOPTION_BARRIERS,
  ADOPTION_BARS,
  ADOPTION_DONUTS,
} from "~/data/metrics";

const PanelCard = ({ title, footer, children }) => {
  return (
    <section className="flex flex-col rounded-2xl border border-card-rule bg-card p-7">
      <p className="font-display text-xs leading-[18px] font-bold tracking-[0.6px] text-highlight">
        {title}
      </p>

      <div className="pt-8">{children}</div>

      {footer && <div className="mt-auto pt-8">{footer}</div>}
    </section>
  );
};

const TONE_TEXT = {
  highlight: "text-highlight",
  muted: "text-muted",
};

const Donut = ({ donut }) => {
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
};

const Bar = ({ bar }) => {
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
            <FontAwesomeIcon icon={bar.icon} />
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
};

const AdoptionSection = () => {
  return (
    <SectionWrapper maxWidth="max-w-[1152px]">
      <SectionHeading
        variant="leftHighlight"
        eyebrow="THE LAST MILE"
        title="The Coverage vs. Adoption Paradox"
      >
        Infrastructure reach vs. daily citizen usage: why near-universal 4G
        signal does not immediately equal active adoption.
      </SectionHeading>

      <div className="mt-8 grid gap-6 md:mt-12 lg:grid-cols-3">
        <PanelCard
          title="COVERAGE VS ADOPTION"
          footer={
            <p className="text-center font-display text-[13px] leading-[21px] font-normal text-muted">
              ~5.5M active internet users despite near-universal signal reach.
            </p>
          }
        >
          <div className="flex gap-4">
            {ADOPTION_DONUTS.map((donut) => (
              <Donut key={donut.label} donut={donut} />
            ))}
          </div>
        </PanelCard>

        <PanelCard
          title="THE RURAL ADOPTION GAP"
          footer={
            <>
              <p className="font-display text-sm leading-[22.75px] font-normal text-muted">
                72.1% of Rwanda&apos;s population lives rurally — yet only 4.4%
                have active internet access.
              </p>
              <p className="pt-1.5 font-display text-sm leading-[21px] font-bold text-white">
                Gap: 29.1 percentage points.
              </p>
            </>
          }
        >
          <div className="flex flex-col gap-6">
            {ADOPTION_BARS.map((bar) => (
              <Bar key={bar.label} bar={bar} />
            ))}
          </div>
        </PanelCard>

        <PanelCard title="3 STRUCTURAL ADOPTION BARRIERS">
          <ol className="flex flex-col gap-4">
            {ADOPTION_BARRIERS.map((item, index) => (
              <li key={item.title} className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="font-display text-base leading-6 font-bold text-secondary"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-display text-[15px] leading-[22.5px] font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="pt-1 font-display text-[13px] leading-[21px] font-normal text-muted">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </PanelCard>
      </div>
    </SectionWrapper>
  );
};

export default AdoptionSection;
