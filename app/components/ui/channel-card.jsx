import Chip from "~/components/ui/chip";
import Icon from "~/components/ui/icon";

/**
 * @param {{
 *   icon: import("@fortawesome/fontawesome-svg-core").IconDefinition,
 *   title: string,
 *   badge?: { label: string, tone?: "accent" },
 *   children: React.ReactNode,
 *   className?: string,
 * }} props
 */
export default function ChannelCard({
  icon,
  title,
  badge,
  children,
  className = "",
}) {
  return (
    <article
      className={`flex flex-col rounded-[14px] border border-card-rule bg-card p-6 ${className}`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="flex items-center gap-2 font-display text-base leading-6 font-semibold text-white">
          <span aria-hidden="true" className="text-highlight">
            <Icon icon={icon} />
          </span>
          {title}
        </h3>
        {badge ? (
          <Chip variant={badge.tone === "accent" ? "badgeAccent" : "badge"}>
            {badge.label}
          </Chip>
        ) : null}
      </div>

      <p className="pt-3 font-display text-sm leading-[22.75px] font-normal text-muted">
        {children}
      </p>
    </article>
  );
}
