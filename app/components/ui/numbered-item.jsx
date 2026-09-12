/**
 * @param {{
 *   index: string,
 *   title: string,
 *   children: React.ReactNode,
 * }} props
 */
export default function NumberedItem({ index, title, children }) {
  return (
    <li className="flex items-start gap-4">
      <span
        aria-hidden="true"
        className="font-display text-base leading-6 font-bold text-secondary"
      >
        {index}
      </span>

      <div>
        <h4 className="font-display text-[15px] leading-[22.5px] font-bold text-white">
          {title}
        </h4>
        <p className="pt-1 font-display text-[13px] leading-[21px] font-normal text-muted">
          {children}
        </p>
      </div>
    </li>
  );
}
