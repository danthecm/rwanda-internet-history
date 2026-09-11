/** @typedef {{ icon: string, title: string, detail: string }} LegendItem */

/**
 * @param {{ items: LegendItem[], className?: string }} props
 */
export default function LegendStrip({ items, className = "" }) {
  return (
    <ul
      className={`grid gap-px overflow-hidden rounded-[10px] border border-console-rule bg-console-rule sm:grid-cols-2 lg:grid-cols-4 ${className}`}
    >
      {items.map((item) => (
        <li
          key={item.title}
          className="flex items-center gap-3 bg-console-legend px-5 py-[13px]"
        >
          <img
            src={item.icon}
            alt=""
            aria-hidden="true"
            className="h-3.5 w-8 shrink-0 object-contain"
          />
          <div>
            <p className="font-sans text-xs leading-[18px] font-semibold text-console-bright">
              {item.title}
            </p>
            <p className="pt-0.5 font-sans text-[10px] leading-[15px] text-console-dim">
              {item.detail}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
