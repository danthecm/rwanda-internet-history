import agriculture from "~/assets/images/agriculture.webp";
import MediaCard from "~/components/ui/MediaCard";
import SectionWrapper from "~/components/ui/SectionWrapper";

const LeapfrogSection = () => {
  return (
    <SectionWrapper
      className="mt-12 w-full md:mt-[49px]"
      innerClassName="relative xl:h-[560px]"
    >
      <div className="xl:absolute xl:inset-y-0 xl:left-0 xl:right-[46.77%]">
        <MediaCard
          src={agriculture}
          alt="A tea picker carrying a basket of freshly picked leaves in a Rwandan plantation"
          credit={{
            label: "Photo: FAO Rwanda",
            href: "https://www.fao.org/rwanda/",
          }}
          className="h-[320px] w-full xl:h-full"
        />
      </div>

      <div className="relative py-6 xl:flex xl:h-full xl:items-center xl:py-0 xl:pointer-events-none">
        <div className="w-full xl:ml-auto xl:w-[672px] xl:pointer-events-auto">
          <div className="flex flex-col justify-center rounded-xl border-l-[3px] border-highlight bg-accent px-3.25 py-4">
            <p className="font-display text-sm leading-[22.75px] font-normal text-muted">
              <span className="font-bold text-secondary">In 1994, </span>
              Rwanda was an agrarian economy with almost no working telephone
              lines or internet connectivity. Rather than waiting decades to
              build heavy industrial factories, the nation decided to{" "}
              <span className="font-semibold text-secondary">
                leapfrog directly into digital services.
              </span>
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LeapfrogSection;
