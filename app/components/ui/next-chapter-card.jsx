import Button from "~/components/ui/button";
import RichText from "~/components/ui/rich-text";

export default function NextChapterCard({ eyebrow, title, cta }) {
  return (
    <div className="flex flex-col gap-8 rounded-3xl border border-accent/30 bg-card p-8 md:flex-row md:items-center md:justify-between md:p-12">
      <div>
        <p className="font-display text-xs leading-4 font-semibold tracking-[1.2px] text-primary">
          {eyebrow}
        </p>
        <p className="pt-2 font-display text-[30px] leading-9 font-black tracking-[-0.6px] text-foreground">
          <RichText segments={title} />
        </p>
      </div>

      <Button to={cta.to} className="self-start md:self-auto">
        {cta.label}
      </Button>
    </div>
  );
}
