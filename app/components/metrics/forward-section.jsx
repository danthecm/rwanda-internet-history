import ArticleCard from "~/components/ui/article-card";
import SectionHeading from "~/components/ui/section-heading";
import { FORWARD } from "~/data/metrics";

export default function ForwardSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-[1152px]">
          <SectionHeading
            variant="leftHighlight"
            eyebrow={FORWARD.eyebrow}
            title={FORWARD.title}
          >
            {FORWARD.lead}
          </SectionHeading>

          <div className="mt-8 grid gap-6 md:mt-12 lg:grid-cols-2">
            {FORWARD.articles.map((article) => (
              <ArticleCard key={article.title} {...article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
