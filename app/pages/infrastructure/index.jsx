import { useLoaderData } from "react-router";
import FiberNetworkConsole from "~/components/infrastructure/FiberNetworkConsole";
import MobileEvolutionSection from "~/components/infrastructure/MobileEvolutionSection";
import NetworkComponentsSection from "~/components/infrastructure/NetworkComponentsSection";
import NextChapterSection from "~/components/ui/NextChapterSection";
import PageHero from "~/components/ui/PageHero";
import StatsPanel from "~/components/ui/StatsPanel";
import { INFRASTRUCTURE_STATS, NETWORK_DATA_ID } from "~/data/infrastructure";

const InfrastructurePage = () => {
  const networkData = useLoaderData();

  return (
    <>
      <PageHero
        content={{
          eyebrow: "Physical Infrastructure · National Grid",
          title: "The Backbone of a Nation",
          lead: "Rwanda is landlocked and hundreds of miles from the ocean. To get high-speed internet, it had to run thousands of kilometers of physical glass cables across borders and over mountains.",
          cta: { label: "View Network Data", href: `#${NETWORK_DATA_ID}` },
        }}
        accent={{
          badge: "border-primary/30 bg-primary/30",
          text: "text-primary",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-[1045px] px-4 md:-mt-[56px] md:px-8 lg:-mt-[72px] xl:-mt-[90px]">
        <StatsPanel stats={INFRASTRUCTURE_STATS} />
      </div>
      <NetworkComponentsSection />
      <FiberNetworkConsole networkData={networkData} />
      <MobileEvolutionSection />
      <NextChapterSection
        title={[
          { text: "See the human impact" },
          { break: true },
          { text: "of this infrastructure." },
        ]}
        lead="Explore digital public services, educational technology, and socio-economic inclusion."
        cta={{ label: "Next: Socio-Economic Metrics", to: "/metrics" }}
      />
    </>
  );
};

export default InfrastructurePage;
