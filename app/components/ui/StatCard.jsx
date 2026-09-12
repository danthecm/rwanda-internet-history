import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VARIANTS = {
  rule: {
    article: "",
    kicker: "text-card-label",
    title: "pt-2 text-lg leading-[24.75px] font-bold",
    body: "pt-4 text-sm leading-[22.75px] text-card-body",
    statWrap: "pt-6",
    stat: "flex items-baseline gap-1.5 border-t border-card-rule pt-[13px]",
    statValue: "text-[30px] leading-9",
    statLabel: "text-xs leading-4 text-card-label",
  },
  inset: {
    article: "rounded-[20px] border border-card-rule",
    kicker: "text-highlight",
    title: "pt-3.5 text-xl leading-[26px] font-black",
    body: "pt-3 text-sm leading-[24.5px] text-muted",
    statWrap: "pt-8",
    stat: "flex flex-col rounded-xl border border-card-rule bg-surface-2 px-5 py-[18px]",
    statValue: "text-[28px] leading-7",
    statLabel: "pt-1.5 text-xs leading-[18px] tracking-[0.24px] text-muted",
  },
};

const StatCard = ({
  icon,
  kicker,
  title,
  stat,
  variant = "rule",
  children,
}) => {
  const styles = VARIANTS[variant] ?? VARIANTS.rule;

  return (
    <article className={`flex h-full flex-col bg-card p-8 ${styles.article}`}>
      {icon && (
        <p
          aria-hidden="true"
          className="h-15 text-[30px] leading-9 text-secondary"
        >
          <FontAwesomeIcon icon={icon} />
        </p>
      )}

      <p
        className={`font-display text-xs leading-4 font-semibold tracking-[1.2px] ${styles.kicker}`}
      >
        {kicker}
      </p>

      <h3 className={`font-display text-white ${styles.title}`}>{title}</h3>

      <p className={`font-display font-normal ${styles.body}`}>{children}</p>

      <div className={`mt-auto ${styles.statWrap}`}>
        <div className={styles.stat}>
          <p
            className={`font-display font-black text-secondary ${styles.statValue}`}
          >
            {stat.value}
          </p>
          <p className={`font-display font-normal ${styles.statLabel}`}>
            {stat.label}
          </p>
        </div>
      </div>
    </article>
  );
};

export default StatCard;
