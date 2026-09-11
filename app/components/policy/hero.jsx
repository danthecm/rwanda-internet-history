import Button from "~/components/ui/button";
import RichText from "~/components/ui/rich-text";
import { HERO } from "~/data/home";

export default function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden">
      <img
        src={HERO.image}
        alt=""
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div aria-hidden="true" className="hero-scrim absolute inset-0 -z-10" />

      {/* Gutter sits on the outer element so the 1240 column itself stays 1240
          wide. Putting px-* on the column would inset the text 32px inside it,
          leaving the heading out of line with the nav bar's left edge. */}
      <div className="px-4 md:px-8">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start gap-4.5 pt-32 pb-16 md:min-h-[842px] md:pt-[314px]">
          <div className="flex flex-col items-start gap-1.75">
            <div className="inline-flex items-center rounded-sm border-[3px] border-dashed border-accent/58 px-4 py-2.75">
              <p className="font-display text-[13px] leading-4 font-medium text-secondary">
                {HERO.eyebrow}
              </p>
            </div>

            <div className="flex flex-col items-start gap-4.5">
              {/* 78px is unusable on a phone; the comp is desktop-only, so the
                  display size scales down below md. */}
              <h1 className="font-display text-[42px] leading-[46px] font-bold text-white md:text-[78px] md:leading-16">
                <RichText segments={HERO.title} />
              </h1>
              <div className="pb-4">
                <p className="max-w-[939px] font-display text-xl leading-8.5 font-normal text-muted-light">
                  {HERO.lead}
                </p>
              </div>
            </div>
          </div>

          <Button>{HERO.ctaLabel}</Button>
        </div>
      </div>
    </section>
  );
}
