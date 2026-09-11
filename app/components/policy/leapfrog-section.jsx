import MediaCard from "~/components/ui/media-card";
import NoteCard from "~/components/ui/note-card";
import RichText from "~/components/ui/rich-text";
import { LEAPFROG } from "~/data/home";

export default function LeapfrogSection() {
  return (
    <section className="w-full">
      <div className="px-4 md:px-8">
        <div className="relative mx-auto max-w-[1240px] xl:h-[560px]">
          <div className="xl:absolute xl:inset-y-0 xl:left-0 xl:right-[46.77%]">
            <MediaCard
              src={LEAPFROG.image}
              alt={LEAPFROG.imageAlt}
              credit={LEAPFROG.imageCredit}
              className="h-[320px] w-full xl:h-full"
            />
          </div>

          {/* At xl this container overlays the image, so let clicks through to
              the photo credit and re-enable them on the note card itself. */}
          <div className="relative py-6 xl:flex xl:h-full xl:items-center xl:py-0 xl:pointer-events-none">
            <div className="w-full xl:ml-auto xl:w-[672px] xl:pointer-events-auto">
              <NoteCard>
                <RichText segments={LEAPFROG.note} />
              </NoteCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
