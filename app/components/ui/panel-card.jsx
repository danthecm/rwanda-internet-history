/**
 * @param {{
 *   title: string,
 *   footer?: React.ReactNode,
 *   children: React.ReactNode,
 *   className?: string,
 * }} props
 */
export default function PanelCard({ title, footer, children, className = "" }) {
  return (
    <section
      className={`flex flex-col rounded-2xl border border-card-rule bg-card p-7 ${className}`}
    >
      <p className="font-display text-xs leading-[18px] font-bold tracking-[0.6px] text-highlight">
        {title}
      </p>

      <div className="pt-8">{children}</div>

      {footer ? <div className="mt-auto pt-8">{footer}</div> : null}
    </section>
  );
}
