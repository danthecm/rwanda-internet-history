import NextChapterCard from "~/components/ui/next-chapter-card";
import { NEXT_CHAPTER } from "~/data/home";

export default function NextChapterSection() {
  return (
    <section className="w-full">
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-[1240px]">
          <NextChapterCard {...NEXT_CHAPTER} />
        </div>
      </div>
    </section>
  );
}
