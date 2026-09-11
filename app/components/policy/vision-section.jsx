import RichText from "~/components/ui/rich-text";
import SectionHeading from "~/components/ui/section-heading";
import { VISION } from "~/data/home";

export default function VisionSection() {
  return (
    <section className="w-full">
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeading eyebrow={VISION.eyebrow} title={VISION.title}>
            <RichText segments={VISION.body} />
          </SectionHeading>
        </div>
      </div>
    </section>
  );
}
