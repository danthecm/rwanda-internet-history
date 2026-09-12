import linePattern from "~/assets/icons/hero-line-pattern.svg";
import { HERO } from "~/data/metrics";

export default function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden">
      <img
        src={linePattern}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-[30px] right-[23px] -z-10 hidden w-[298px] max-w-none -scale-y-100 lg:block"
      />

      <div
        aria-hidden="true"
        className="ember-glow pointer-events-none absolute bottom-0 left-[-261px] -z-10 h-[446px] w-[596px] max-w-none"
      />

      <div className="px-4 md:px-8">
        <div className="mx-auto flex w-full max-w-[560px] flex-col items-center gap-4.5 pt-40 pb-20 text-center md:max-w-[720px] md:pt-52 md:pb-24 lg:pt-64 lg:pb-28 xl:max-w-[939px] xl:pt-[300px] xl:pb-[130px]">
          <div className="flex flex-col items-center gap-1.75">
            <div className="inline-flex h-[33px] items-center rounded-sm border border-secondary/30 bg-secondary/30 px-3 py-1">
              <p className="font-display text-xs leading-4 font-medium text-secondary">
                {HERO.eyebrow}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4.5">
              <h1 className="font-display text-4xl leading-[47px] font-bold text-white md:text-[42px] md:leading-[54px] xl:text-5xl xl:leading-16">
                {HERO.title}
              </h1>
              <div className="pb-4">
                <p className="font-display text-xl leading-8.5 font-normal text-muted-light">
                  {HERO.lead}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
