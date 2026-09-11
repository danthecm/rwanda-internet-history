/**
 * @param {{
 *   icon: string,
 *   kicker: string,
 *   title: string,
 *   stat: { value: string, label: string },
 *   children: React.ReactNode,
 *   className?: string,
 * }} props
 */
export default function NetworkCard({
  icon,
  kicker,
  title,
  stat,
  children,
  className = "",
}) {
  return (
    <article className={`flex h-full flex-col bg-card p-8 ${className}`}>
      <p
        aria-hidden="true"
        className="h-15 font-display text-[30px] leading-9 font-normal text-secondary"
      >
        {icon}
      </p>

      <p className="font-display text-xs leading-4 font-semibold tracking-[1.2px] text-card-label">
        {kicker}
      </p>

      <h3 className="pt-2 font-display text-lg leading-[24.75px] font-bold text-white">
        {title}
      </h3>

      <p className="pt-4 font-display text-sm leading-[22.75px] font-normal text-card-body">
        {children}
      </p>

      <div className="mt-auto pt-6">
        <div className="flex items-baseline gap-1.5 border-t border-card-rule pt-[13px]">
          <p className="font-display text-[30px] leading-9 font-black text-secondary">
            {stat.value}
          </p>
          <p className="font-display text-xs leading-4 font-normal text-card-label">
            {stat.label}
          </p>
        </div>
      </div>
    </article>
  );
}
