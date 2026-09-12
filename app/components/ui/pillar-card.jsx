import Icon from "~/components/ui/icon";

const ACCENT_CLASS = {
  highlight: { icon: "text-highlight", rule: "bg-highlight" },
  secondary: { icon: "text-secondary", rule: "bg-secondary" },
  green: { icon: "text-pillar-green", rule: "bg-pillar-green" },
};

/**
 * @param {{
 *   icon: import("@fortawesome/fontawesome-svg-core").IconDefinition,
 *   title: string,
 *   accent?: keyof typeof ACCENT_CLASS,
 *   children: React.ReactNode,
 *   className?: string,
 * }} props
 */
export default function PillarCard({
  icon,
  title,
  accent = "highlight",
  children,
  className = "",
}) {
  const styles = ACCENT_CLASS[accent];

  return (
    <div className={`flex flex-col bg-card p-8 ${className}`}>
      <p aria-hidden="true" className={`text-[30px] leading-9 ${styles.icon}`}>
        <Icon icon={icon} />
      </p>

      <div aria-hidden="true" className={`mt-5 h-0.5 w-8 ${styles.rule}`} />

      <h3 className="mt-4 font-display text-xl leading-7 font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 font-display text-sm leading-[22.75px] font-normal text-muted-card">
        {children}
      </p>
    </div>
  );
}
