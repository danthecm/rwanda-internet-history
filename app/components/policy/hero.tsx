import heroBg from "~/assets/images/hero-bg.jpg";
import Button from "~/components/ui/button";

export default function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div aria-hidden="true" className="hero-scrim absolute inset-0 -z-10" />

      <div className="mx-auto flex max-w-[1240px] flex-col items-start gap-4.5 px-4 pt-32 pb-16 md:min-h-[842px] md:px-8 md:pt-[314px]">
        <div className="flex flex-col items-start gap-1.75">
          <div className="inline-flex items-center rounded-sm border-[3px] border-dashed border-accent/58 px-4 py-2.75">
            <p className="font-display text-[13px] leading-4 font-medium text-secondary">
              Policy Foundations · 1994–2010
            </p>
          </div>

          <div className="flex flex-col items-start gap-4.5">
            {/* 78px is unusable on a phone; the comp is desktop-only, so the
                display size scales down below md. */}
            <h1 className="font-display text-[42px] leading-[46px] font-bold text-white md:text-[78px] md:leading-16">
              Rwanda's Digital <span className="text-primary">Renaissance</span>
            </h1>
            <div className="pb-4">
              <p className="max-w-[939px] font-display text-xl leading-8.5 font-normal text-muted-light">
                From Post-Conflict to Tech Hub — starting from ground zero after
                1994, Rwanda chose telecommunications and digital infrastructure
                as the foundation to rebuild its national economy.
              </p>
            </div>
          </div>
        </div>

        <Button>Explore Policy History</Button>
      </div>
    </section>
  );
}
