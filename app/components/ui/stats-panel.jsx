import SourceNote from "~/components/ui/source-note";

/**
 * @typedef {{
 *   value: string,
 *   label: string,
 *   source?: string,
 *   sourceUrl?: string,
 *   asOf?: string,
 * }} Stat
 */

const VALUE_VARIANTS = {
  display: "font-sans text-6xl leading-18 tracking-[-1.2px] text-primary-700",
  compact:
    "font-display text-[40px] leading-[45px] tracking-[-0.8px] text-primary-700",
};

/**
 * @param {{
 *   stats: Stat[],
 *   variant?: keyof typeof VALUE_VARIANTS,
 *   className?: string,
 * }} props
 */
export default function StatsPanel({ stats, variant = "display", className = "" }) {
  return (
    <div
      className={`w-full rounded-[40px] bg-panel px-6 py-7.5 md:px-14 md:py-13.25 ${className}`}
    >
      <div className="flex flex-col gap-9 md:flex-row md:gap-4">
        {stats.map((stat, i) => (
          <div key={stat.label} className="contents">
            {i > 0 && (
              <div
                aria-hidden="true"
                className="hidden w-px self-stretch bg-divider md:block"
              />
            )}
            <div className="flex flex-1 flex-col gap-3 text-center">
              <p className={`font-semibold ${VALUE_VARIANTS[variant]}`}>
                {stat.value}
              </p>
              <p className="font-sans text-lg leading-7 font-medium text-panel-text">
                {stat.label}
              </p>
              {stat.source ? (
                <SourceNote
                  source={stat.source}
                  sourceUrl={stat.sourceUrl}
                  asOf={stat.asOf}
                  className="text-panel-text/70"
                />
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
