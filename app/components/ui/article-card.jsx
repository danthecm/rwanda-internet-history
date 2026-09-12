import Icon from "~/components/ui/icon";
import RichText from "~/components/ui/rich-text";

const ACCENT_CLASS = {
  highlight: { eyebrow: "text-highlight", icon: "text-highlight" },
  secondary: { eyebrow: "text-secondary", icon: "text-secondary" },
};

/**
 * @param {{
 *   eyebrow: string,
 *   title: string,
 *   body: string,
 *   items: {
 *     icon: import("@fortawesome/fontawesome-svg-core").IconDefinition,
 *     text: { text?: string, className?: string, break?: boolean }[],
 *   }[],
 *   accent?: keyof typeof ACCENT_CLASS,
 *   className?: string,
 * }} props
 */
export default function ArticleCard({
  eyebrow,
  title,
  body,
  items,
  accent = "highlight",
  className = "",
}) {
  const styles = ACCENT_CLASS[accent];

  return (
    <article
      className={`flex flex-col rounded-2xl border border-card-rule bg-card p-8 ${className}`}
    >
      <p
        className={`font-display text-xs leading-[18px] font-bold tracking-[0.72px] ${styles.eyebrow}`}
      >
        {eyebrow}
      </p>

      <h3 className="pt-2 font-display text-[22px] leading-[33px] font-bold text-white">
        {title}
      </h3>

      <p className="pt-4 font-display text-sm leading-[22.4px] font-normal text-muted">
        {body}
      </p>

      <ul className="mt-auto flex flex-col gap-2.5 pt-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className={`pt-0.75 text-sm leading-[14px] ${styles.icon}`}
            >
              <Icon icon={item.icon} />
            </span>
            <p className="font-display text-sm leading-[21px] font-normal text-muted-lighter">
              <RichText segments={item.text} />
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
