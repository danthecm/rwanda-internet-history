import { useState } from "react";

import LegendStrip from "~/components/ui/legend-strip";
import PanelMessage from "~/components/ui/panel-message";
import StatusPill from "~/components/ui/status-pill";
import { DEFAULT_NODE_ID, FOOTER, HEADER, LEGEND } from "~/data/routing.js";
import useApiResource from "~/hooks/use-api-resource";

import InspectorSidebar from "./inspector-sidebar";
import {
  buildInspectorNode,
  formatCoordinates,
  resourceKeyFor,
} from "./inspector-model.js";
import RoutingMap from "./routing-map";

const SIDEBAR_CLASS =
  "order-2 w-full shrink-0 overflow-hidden lg:order-1 lg:w-[280px] lg:overflow-hidden";

/** @param {{ status: string, peerCount?: number }} params */
function badgeFor(status, peerCount) {
  if (status === "ready") {
    return { tone: "live", label: `RINEX Core: ACTIVE · ${peerCount} Connected Peers` };
  }
  if (status === "error") {
    return { tone: "unverified", label: "RINEX Core: status unverified" };
  }
  return { tone: "pending", label: "RINEX Core: checking…" };
}

/** @param {Date | null} date */
function checkedLabel(date) {
  if (!date) return null;
  return `checked ${date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}`;
}

/**
 * @param {{ status: ReturnType<typeof useApiResource>, className?: string }} props
 */
export default function RoutingConsole({ status, className = "" }) {
  const topology = useApiResource("/api/network-topology");
  const peering = useApiResource("/api/peering-peers");
  const subsea = useApiResource("/api/subsea-gateways");
  const [openId, setOpenId] = useState(DEFAULT_NODE_ID);

  const node = buildInspectorNode(openId, {
    peering: peering.data,
    subsea: subsea.data,
  });
  const badge = badgeFor(status.status, status.data?.peerCount);
  const checkedAt = checkedLabel(status.checkedAt);
  const facility = peering.data?.facility;
  const inspectorResource =
    openId && resourceKeyFor(openId) === "peering" ? peering : subsea;

  return (
    <div
      className={`rounded-2xl border border-console-edge bg-console p-4 shadow-[0_0_100px_rgba(0,229,255,0.03),0_2px_32px_rgba(0,0,0,0.7)] md:p-7 ${className}`}
    >
      <div className="flex flex-col gap-3 border-b border-console-rule pb-3.5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-sans text-[10.5px] leading-[15.75px] font-semibold tracking-[1.47px] text-console-dim uppercase">
            {HEADER.kicker}
          </p>
          <h2 className="pt-[5px] font-sans text-lg leading-[25px] font-semibold text-console-bright md:text-xl">
            {HEADER.title}
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <StatusPill tone={badge.tone}>{badge.label}</StatusPill>
          {checkedAt ? (
            <span className="font-mono text-[10px] leading-[15px] text-console-dim">
              {checkedAt}
            </span>
          ) : null}
          {facility ? (
            <span className="font-mono text-[10px] leading-[15px] text-console-data opacity-65">
              {formatCoordinates([facility.longitude, facility.latitude])}
            </span>
          ) : null}
        </div>
      </div>

      <div className="relative flex flex-col gap-3.5 pt-5 lg:flex-row">
        {openId ? (
          node ? (
            <InspectorSidebar
              node={node}
              onClose={() => setOpenId(null)}
              className={SIDEBAR_CLASS}
            />
          ) : (
            <aside
              className={`flex flex-col rounded-xl border border-console-rule bg-console-panel ${SIDEBAR_CLASS}`}
            >
              <PanelMessage
                status={inspectorResource?.status ?? "loading"}
                loadingLabel="Loading node details…"
                error={inspectorResource?.error}
                onRetry={inspectorResource?.reload}
                className="min-h-[180px]"
              />
            </aside>
          )
        ) : null}

        <div className="relative order-1 h-[360px] w-full min-w-0 overflow-hidden rounded-[10px] border border-console-rule bg-console lg:order-2 lg:h-[568px] lg:flex-1">
          {topology.status === "ready" ? (
            <RoutingMap
              topology={topology.data}
              onSelect={setOpenId}
              className="size-full"
            />
          ) : (
            <PanelMessage
              status={topology.status}
              loadingLabel="Loading network topology…"
              error={topology.error}
              onRetry={topology.reload}
              className="size-full"
            />
          )}
        </div>
      </div>

      <LegendStrip items={LEGEND} className="mt-4" />

      <div className="flex flex-col gap-1 pt-3.5 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="font-sans text-[10px] leading-[15px] text-console-dim opacity-65">
          Sources:{" "}
          {FOOTER.sources.map((source, index) => (
            <span key={source.href}>
              {index > 0 ? " · " : null}
              <a
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              >
                {source.label}
              </a>
            </span>
          ))}
        </p>
        <p className="font-mono text-[10px] leading-[15px] text-console-data opacity-65">
          {FOOTER.version}
          {topology.meta ? ` · ${topology.meta.fetchedAt.slice(0, 10)}` : null}
          {openId ? ` · #${openId}` : null}
        </p>
      </div>

      <p className="pt-2 font-sans text-[10px] leading-[15px] text-console-dim opacity-65">
        {FOOTER.curatedNote}
      </p>
    </div>
  );
}
