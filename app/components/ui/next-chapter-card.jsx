import Button from "~/components/ui/button";
import Icon from "~/components/ui/icon";
import RichText from "~/components/ui/rich-text";

const VARIANTS = {
  card: "rounded-3xl border-accent/30 bg-card",
  band: "rounded-sm border-white/10 bg-ink",
};

/**
 * @param {{
 *   eyebrow: string,
 *   eyebrowIcon?: import("@fortawesome/fontawesome-svg-core").IconDefinition,
 *   title: { text?: string, className?: string, break?: boolean }[],
 *   lead?: string,
 *   cta: { label: string, to: string },
 *   variant?: keyof typeof VARIANTS,
 * }} props
 */
export default function NextChapterCard({
  eyebrow,
  eyebrowIcon,
  title,
  lead,
  cta,
  variant = "card",
}) {
  return (
    <div
      className={`flex flex-col gap-8 border p-8 md:flex-row md:items-center md:justify-between md:p-12 ${VARIANTS[variant]}`}
    >
      <div>
        <p className="flex items-center gap-1.5 font-display text-xs leading-4 font-semibold tracking-[1.2px] text-primary">
          {eyebrowIcon ? <Icon icon={eyebrowIcon} /> : null}
          {eyebrow}
        </p>
        <p className="pt-2 font-display text-2xl leading-8 font-black tracking-[-0.6px] text-foreground md:text-[30px] md:leading-9">
          <RichText segments={title} />
        </p>
        {lead ? (
          <p className="pt-2 font-display text-sm leading-5 font-normal text-muted-dim">
            {lead}
          </p>
        ) : null}
      </div>

      <Button to={cta.to} className="self-start md:self-auto">
        {cta.label}
      </Button>
    </div>
  );
}
