import Hero from "~/components/infrastructure/hero";
import NetworkSection from "~/components/infrastructure/network-section";
import RoutingSection from "~/components/routing/routing-section";
import StatsPanel from "~/components/ui/stats-panel";
import { PEER_COUNT_STAT_ID, STATS } from "~/data/infrastructure";
import useApiResource from "~/hooks/use-api-resource";

const STATUS_INTERVAL_MS = 5 * 60 * 1000;

export default function InfrastructurePage() {
  const status = useApiResource("/api/network-status", {
    intervalMs: STATUS_INTERVAL_MS,
  });

  const stats = STATS.items.map((item) =>
    item.id === PEER_COUNT_STAT_ID && status.data
      ? { ...item, value: String(status.data.peerCount) }
      : item,
  );

  return (
    <>
      <Hero />
      <div
        id={STATS.id}
        className="relative z-10 mx-auto w-full max-w-[1045px] px-4 md:-mt-[56px] md:px-8 lg:-mt-[72px] xl:-mt-[90px]"
      >
        <StatsPanel stats={stats} variant="compact" />
      </div>
      <NetworkSection />
      <RoutingSection status={status} />
    </>
  );
}
