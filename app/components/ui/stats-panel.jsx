/** @typedef {{ value: string, label: string }} Stat */

/** @param {{ stats: Stat[], className?: string }} props */
export default function StatsPanel({ stats, className = "" }) {
  return (
    <div
      className={`w-full rounded-[40px] bg-panel px-14 py-7.5 md:py-13.25 ${className}`}
    >
      <div className="flex flex-col gap-9 md:flex-row md:gap-4">
        {stats.map((stat, i) => (
          <div key={stat.label} className="contents">
            {/* Rules sit between items, and stretch to the tallest metric
                rather than the comp's fixed 112px. Desktop only. */}
            {i > 0 && (
              <div
                aria-hidden="true"
                className="hidden w-px self-stretch bg-divider md:block"
              />
            )}
            <div className="flex flex-1 flex-col gap-3 text-center">
              {/* --color-primary is only 2.7:1 on --color-panel, below AA even
                  for large text; primary-700 is the same hue at 5.6:1. */}
              <p className="font-sans text-6xl leading-18 font-semibold tracking-[-1.2px] text-primary-700">
                {stat.value}
              </p>
              <p className="font-sans text-lg leading-7 font-medium text-panel-text">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
