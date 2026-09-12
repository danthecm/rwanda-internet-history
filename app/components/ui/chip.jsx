import Icon from "~/components/ui/icon";

const VARIANTS = {
  service: "border-transparent bg-surface-2 text-muted-lighter",
  badge: "border-white/20 bg-white/5 text-muted-lighter",
  badgeAccent: "border-secondary bg-secondary/15 font-semibold text-secondary",
};

/**
 * @param {{
 *   children: React.ReactNode,
 *   icon?: import("@fortawesome/fontawesome-svg-core").IconDefinition,
 *   variant?: keyof typeof VARIANTS,
 *   className?: string,
 * }} props
 */
export default function Chip({
  children,
  icon,
  variant = "service",
  className = "",
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-display text-xs leading-4 whitespace-nowrap ${VARIANTS[variant]} ${className}`}
    >
      {icon ? <Icon icon={icon} /> : null}
      {children}
    </span>
  );
}
