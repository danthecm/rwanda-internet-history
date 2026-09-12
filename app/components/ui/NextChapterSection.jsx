import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "~/components/ui/Button";
import SectionWrapper from "~/components/ui/SectionWrapper";

const NextChapterSection = ({
  eyebrow = "NEXT CHAPTER",
  eyebrowIcon,
  title,
  lead,
  cta,
  maxWidth = "max-w-[1152px]",
}) => {
  return (
    <SectionWrapper
      className="mt-12 w-full pb-16 md:mt-[65px] md:pb-[69px]"
      maxWidth={maxWidth}
    >
      <div className="flex flex-col gap-8 rounded-3xl border border-accent/30 bg-card p-8 md:flex-row md:items-center md:justify-between md:p-12">
        <div>
          <p className="flex items-center gap-1.5 font-display text-xs leading-4 font-semibold tracking-[1.2px] text-primary">
            {eyebrowIcon && (
              <FontAwesomeIcon icon={eyebrowIcon} aria-hidden="true" />
            )}
            {eyebrow}
          </p>
          <p className="pt-2 font-display text-2xl leading-8 font-black tracking-[-0.6px] text-foreground md:text-[30px] md:leading-9">
            {Array.isArray(title)
              ? title.map((part, i) =>
                  part.break ? (
                    <br key={i} />
                  ) : (
                    <span key={i} className={part.className}>
                      {part.text}
                    </span>
                  ),
                )
              : title}
          </p>
          {lead && (
            <p className="pt-2 font-display text-sm leading-5 font-normal text-muted">
              {lead}
            </p>
          )}
        </div>

        <Button to={cta.to} className="self-start md:self-auto">
          {cta.label}
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default NextChapterSection;
