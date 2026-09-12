import Button from "~/components/ui/Button";

const PageHero = ({
  content,
  accent = { badge: "border-primary/30 bg-primary/30", text: "text-primary" },
  bgImage,
  align = "center",
}) => {
  const isLeft = align === "left";

  return (
    <section className="relative isolate w-full overflow-hidden">
      {bgImage ? (
        <>
          <img
            src={bgImage}
            alt=""
            className="absolute inset-0 -z-10 size-full object-cover"
          />
          <div
            aria-hidden="true"
            className="hero-scrim absolute inset-0 -z-10"
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="ember-glow pointer-events-none absolute bottom-0 left-[-384px] -z-10 h-[631px] w-[842px] max-w-none"
        />
      )}

      <div className="px-4 md:px-8">
        <div
          className={`mx-auto flex w-full flex-col gap-4.5 ${
            isLeft
              ? "max-w-[1240px] items-start pt-32 pb-16 text-left md:min-h-[842px] md:pt-[314px]"
              : "max-w-[560px] items-center pt-40 pb-20 text-center md:max-w-[720px] md:pt-52 md:pb-24 lg:pt-64 lg:pb-28 xl:max-w-[939px] xl:pt-[300px] xl:pb-[130px]"
          }`}
        >
          <div
            className={`flex flex-col gap-1.75 ${
              isLeft ? "items-start" : "items-center"
            }`}
          >
            <div
              className={`inline-flex items-center rounded-sm border ${
                isLeft
                  ? "border-[3px] border-dashed border-accent/58 px-4 py-2.75"
                  : `h-[33px] px-3 py-1 ${accent.badge}`
              }`}
            >
              <p
                className={`font-display font-medium ${
                  isLeft
                    ? "text-[13px] leading-4 text-secondary"
                    : `text-xs leading-4 ${accent.text}`
                }`}
              >
                {content.eyebrow}
              </p>
            </div>

            <div
              className={`flex flex-col gap-4.5 ${
                isLeft ? "items-start" : "items-center"
              }`}
            >
              <h1
                className={`font-display font-bold text-white ${
                  isLeft
                    ? "text-[42px] leading-[46px] md:text-[78px] md:leading-16"
                    : "text-4xl leading-[47px] md:text-[42px] md:leading-[54px] xl:text-5xl xl:leading-16"
                }`}
              >
                {content.title}
              </h1>
              <div className="pb-4">
                <p className="max-w-[939px] font-display text-xl leading-8.5 font-normal text-muted">
                  {content.lead}
                </p>
              </div>
            </div>
          </div>

          {content.cta ? (
            <Button href={content.cta.href} to={content.cta.to}>
              {content.cta.label}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
