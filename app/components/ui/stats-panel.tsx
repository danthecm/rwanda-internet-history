type Stat = { value: string; label: string };

export const DEFAULT_STATS: Stat[] = [
  { value: "4", label: "NICI Phases" },
  { value: "2000", label: "Vision 2020 Launch" },
  { value: "20+", label: "Years of ICT Governance" },
];

type StatsPanelProps = {
  stats?: Stat[];
  className?: string;
};

export default function StatsPanel({
  stats = DEFAULT_STATS,
  className = "",
}: StatsPanelProps) {
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
              <p className="font-sans text-6xl leading-18 font-semibold tracking-[-1.2px] text-primary">
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
