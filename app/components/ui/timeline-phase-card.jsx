const ACCENT_CLASS = {
  solid: "bg-secondary",
  gradient: "bg-gradient-to-r from-secondary-900 to-secondary",
};

/**
 * @param {{
 *   phase: string,
 *   period: string,
 *   title: string,
 *   description: string,
 *   points: string[],
 *   accent?: keyof typeof ACCENT_CLASS,
 *   className?: string,
 * }} props
 */
export default function TimelinePhaseCard({
  phase,
  period,
  title,
  description,
  points,
  accent = "solid",
  className = "",
}) {
  return (
    <article
      className={`relative flex flex-col border border-card-rule bg-card p-8 ${className}`}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1 ${ACCENT_CLASS[accent]}`}
      />

      <div className="flex items-center gap-3">
        <span className="rounded bg-primary px-2 py-1 font-display text-xs leading-4 font-black tracking-[1.2px] text-ink">
          {phase}
        </span>
        <span className="font-display text-xs leading-4 font-normal text-card-label">
          {period}
        </span>
      </div>

      <div className="flex flex-col gap-1.5 pt-6">
        <h3 className="font-display text-xl leading-7 font-bold text-white">
          {title}
        </h3>
        <p className="font-display text-sm leading-[18px] font-normal text-[#bfbaba]">
          {description}
        </p>
      </div>

      <ul className="flex flex-col gap-3 pt-5">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-muted-dim"
            />
            <span className="font-display text-sm leading-5 font-normal text-muted-dim">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
