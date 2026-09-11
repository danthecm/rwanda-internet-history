export default function PhaseCard({
  phase,
  period,
  title,
  children,
  className = "",
}) {
  return (
    <article
      className={`flex flex-col rounded-2xl bg-phase px-6.25 py-5.5 transition-colors duration-200 hover:bg-phase-hover ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="rounded bg-white/6 px-2 py-1 font-display text-xs leading-4 font-black text-muted-light">
          {phase}
        </span>
        <span className="font-display text-xs leading-4 font-medium text-muted-dim">
          {period}
        </span>
      </div>

      <h3 className="pt-4 font-display text-lg leading-7 font-bold text-white">
        {title}
      </h3>

      <p className="pt-3 font-display text-sm leading-[22.75px] font-normal text-muted-card">
        {children}
      </p>
    </article>
  );
}
