import Icon from "~/components/ui/icon";

const VARIANTS = {
  rule: {
    root: "bg-card p-8",
    kicker: "text-card-label",
    title: "pt-2 text-lg leading-[24.75px] font-bold",
    body: "pt-4 text-sm leading-[22.75px] text-card-body",
    gap: "pt-6",
    stat: "flex items-baseline gap-1.5 border-t border-card-rule pt-[13px]",
    value: "text-[30px] leading-9 text-secondary",
    label: "text-xs leading-4 text-card-label",
  },
  inset: {
    root: "rounded-[20px] border border-card-rule bg-card p-8",
    kicker: "text-highlight",
    title: "pt-3.5 text-xl leading-[26px] font-black",
    body: "pt-3 text-sm leading-[24.5px] text-muted",
    gap: "pt-8",
    stat: "flex flex-col rounded-xl border border-card-rule bg-surface-2 px-5 py-[18px]",
    value: "text-[28px] leading-7 text-secondary",
    label: "pt-1.5 text-xs leading-[18px] tracking-[0.24px] text-muted",
  },
};

/**
 * @param {{
 *   icon?: import("@fortawesome/fontawesome-svg-core").IconDefinition,
 *   kicker: string,
 *   title: string,
 *   stat: { value: string, label: string },
 *   variant?: keyof typeof VARIANTS,
 *   children: React.ReactNode,
 *   className?: string,
 * }} props
 */
export default function StatCard({
  icon,
  kicker,
  title,
  stat,
  variant = "rule",
  children,
  className = "",
}) {
  const styles = VARIANTS[variant];

  return (
    <article
      className={`flex h-full flex-col ${styles.root} ${className}`}
    >
      {icon ? (
        <p
          aria-hidden="true"
          className="h-15 text-[30px] leading-9 text-secondary"
        >
          <Icon icon={icon} />
        </p>
      ) : null}

      <p
        className={`font-display text-xs leading-4 font-semibold tracking-[1.2px] ${styles.kicker}`}
      >
        {kicker}
      </p>

      <h3 className={`font-display text-white ${styles.title}`}>{title}</h3>

      <p className={`font-display font-normal ${styles.body}`}>{children}</p>

      <div className={`mt-auto ${styles.gap}`}>
        <div className={styles.stat}>
          <p className={`font-display font-black ${styles.value}`}>
            {stat.value}
          </p>
          <p className={`font-display font-normal ${styles.label}`}>
            {stat.label}
          </p>
        </div>
      </div>
    </article>
  );
}
