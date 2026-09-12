import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeading from "~/components/ui/SectionHeading";
import SectionWrapper from "~/components/ui/SectionWrapper";
import { FORWARD_ARTICLES } from "~/data/metrics";

const ACCENT_CLASS = {
  highlight: { eyebrow: "text-highlight", icon: "text-highlight" },
  secondary: { eyebrow: "text-secondary", icon: "text-secondary" },
};

const ArticleCard = ({ eyebrow, title, body, items, accent = "highlight" }) => {
  const styles = ACCENT_CLASS[accent] ?? ACCENT_CLASS.highlight;

  return (
    <article className="flex flex-col rounded-2xl border border-card-rule bg-card p-8">
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
              <FontAwesomeIcon icon={item.icon} />
            </span>
            <p className="font-display text-sm leading-[21px] font-normal text-muted">
              {Array.isArray(item.text)
                ? item.text.map((part, i) =>
                    part.className ? (
                      <span key={i} className={part.className}>
                        {part.text}
                      </span>
                    ) : (
                      part.text
                    ),
                  )
                : item.text}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};

const ForwardSection = () => {
  return (
    <SectionWrapper maxWidth="max-w-[1152px]">
      <SectionHeading
        variant="leftHighlight"
        eyebrow="STRATEGIC CONTINUITY"
        title="Looking Forward"
      >
        How two decades of foundational telecommunications and civic
        infrastructure are paving the way for Rwanda&apos;s high-income digital
        economy.
      </SectionHeading>

      <div className="mt-8 grid gap-6 md:mt-12 lg:grid-cols-2">
        {FORWARD_ARTICLES.map((article) => (
          <ArticleCard key={article.title} {...article} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ForwardSection;
