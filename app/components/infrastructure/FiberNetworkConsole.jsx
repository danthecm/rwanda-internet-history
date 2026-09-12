import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import {
  DEFAULT_NODE_ID,
  LEGEND,
  NETWORK_SOURCES,
} from "~/data/fiber-network.js";
import {
  buildInspectorNode,
  formatCoordinates,
  resourceKeyFor,
} from "~/lib/inspector-data.js";
import FiberNetworkMap from "./FiberNetworkMap";
import SectionWrapper from "~/components/ui/SectionWrapper";

const STATUS_TONES = {
  live: {
    wrap: "border-console-badge-edge bg-console-badge",
    dot: "bg-console-live shadow-[0_0_7px_var(--color-console-live)]",
    text: "text-console-live",
  },
  unverified: {
    wrap: "border-console-amber/40 bg-console-amber/10",
    dot: "bg-console-amber shadow-[0_0_7px_var(--color-console-amber)]",
    text: "text-console-amber",
  },
  pending: {
    wrap: "border-console-rule bg-console-head",
    dot: "bg-console-dim",
    text: "text-console-dim",
  },
};

const ACCENT_DOTS = {
  amber: "bg-console-amber shadow-[0_0_8px_var(--color-console-amber)]",
  ember: "bg-ember shadow-[0_0_8px_var(--color-ember)]",
  subsea: "bg-console-subsea shadow-[0_0_8px_var(--color-console-subsea)]",
};

export const StatusPill = ({ children, tone = "live" }) => {
  const styles = STATUS_TONES[tone] ?? STATUS_TONES.live;

  return (
    <span
      className={`inline-flex items-center gap-[7px] rounded-full border px-3 py-[5px] ${styles.wrap}`}
    >
      <span
        aria-hidden="true"
        className={`size-[7px] shrink-0 rounded-full ${styles.dot}`}
      />
      <span
        className={`font-sans text-[11px] leading-[16.5px] font-semibold ${styles.text}`}
      >
        {children}
      </span>
    </span>
  );
};

const LegendStrip = ({ items }) => {
  return (
    <ul className="mt-4 grid gap-px overflow-hidden rounded-[10px] border border-console-rule bg-console-rule sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <li
          key={item.title}
          className="flex items-center gap-3 bg-console-legend px-5 py-[13px]"
        >
          <img
            src={item.icon}
            alt=""
            aria-hidden="true"
            className="h-3.5 w-8 shrink-0 object-contain"
          />
          <div>
            <p className="font-sans text-xs leading-[18px] font-semibold text-console-bright">
              {item.title}
            </p>
            <p className="pt-0.5 font-sans text-[10px] leading-[15px] text-console-dim">
              {item.detail}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export const PanelMessage = ({
  status,
  loadingLabel,
  error,
  className = "",
}) => {
  if (status === "loading") {
    return (
      <div
        role="status"
        className={`flex flex-col items-center justify-center gap-3 p-6 text-center ${className}`}
      >
        <span
          aria-hidden="true"
          className="size-5 animate-spin rounded-full border-2 border-console-rule border-t-console-data"
        />
        <p className="font-sans text-[11px] leading-4 text-console-dim">
          {loadingLabel}
        </p>
      </div>
    );
  }

  return (
    <div
      role="alert"
      className={`flex flex-col items-center justify-center gap-3 p-6 text-center ${className}`}
    >
      <p className="max-w-[280px] font-sans text-[11.5px] leading-[18.4px] text-console-dim">
        {error ?? "This data could not be loaded."}
      </p>
    </div>
  );
};

const InspectorSidebar = ({ node, onClose }) => {
  return (
    <aside
      aria-live="polite"
      className="order-2 flex w-full shrink-0 flex-col overflow-hidden rounded-xl border border-console-rule bg-console-panel lg:order-1 lg:w-[280px]"
    >
      <div className="border-b border-console-rule bg-console-head px-4 pt-[14px] pb-3">
        <div className="flex items-center justify-between gap-2">
          <p className="font-sans text-[10px] leading-[15px] font-semibold tracking-[1px] text-console-dim uppercase">
            Node Inspector
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Hide node inspector"
            className="-m-1 flex size-6 items-center justify-center rounded p-1 text-sm text-console-dim hover:text-console-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-console-data"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="flex items-center gap-2 pt-1">
          <span
            aria-hidden="true"
            className={`size-2 shrink-0 rounded-full ${ACCENT_DOTS[node.accent]}`}
          />
          <h3 className="font-sans text-sm leading-[21px] font-bold text-console-bright">
            {node.name}
          </h3>
        </div>
      </div>

      <p className="px-4 pt-[14px] pb-[10px] font-sans text-[11.5px] leading-[18.4px] text-console-dim">
        {node.description}
      </p>

      <div aria-hidden="true" className="mx-4 h-px bg-console-rule" />

      <dl className="flex flex-col gap-2.5 px-4 py-3">
        {node.fields.map((field) => (
          <div key={field.label}>
            <dt className="font-sans text-[9.5px] leading-[14.25px] font-medium tracking-[0.76px] text-console-dim uppercase">
              {field.label}
            </dt>
            <dd className="pt-0.5 font-mono text-[11px] leading-[16.5px] text-console-data">
              {field.value}
            </dd>
          </div>
        ))}
      </dl>

      {node.status ? (
        <div className="mt-auto border-t border-console-rule px-4 py-2.5">
          <StatusPill>{node.status}</StatusPill>
        </div>
      ) : null}

      {node.telemetry.length > 0 ? (
        <div className="px-3 pt-2 pb-[14px]">
          <div className="rounded-lg border border-console-rule bg-console-well px-3 py-2.5">
            <p className="font-sans text-[9px] leading-[13.5px] font-semibold tracking-[0.9px] text-console-dim uppercase">
              Live Telemetry
            </p>
            <dl className="pt-1">
              {node.telemetry.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-3 pt-1"
                >
                  <dt className="font-sans text-[10px] leading-[15px] text-console-dim">
                    {row.label}
                  </dt>
                  <dd className="font-mono text-[10px] leading-[15px] text-console-live">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      ) : null}
    </aside>
  );
};

const badgeFor = (status, peerCount) => {
  if (status === "ready") {
    return {
      tone: "live",
      label: `RINEX Core: ACTIVE · ${peerCount} Connected Peers`,
    };
  } else if (status === "error") {
    return { tone: "unverified", label: "RINEX Core: status unverified" };
  }
  return { tone: "pending", label: "RINEX Core: checking…" };
};

const checkedLabel = (dateString) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return `checked ${date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}`;
};

const FiberNetworkConsole = ({ networkData }) => {
  const { topology, peering, subsea, status } = networkData || {};
  const [openId, setOpenId] = useState(DEFAULT_NODE_ID);

  const node = buildInspectorNode(openId, {
    peering: peering?.data,
    subsea: subsea?.data,
  });
  const badge = badgeFor(status?.status, status?.data?.peerCount);
  const checkedAt = checkedLabel(status?.checkedAt);
  const facility = peering?.data?.facility;
  const inspectorResource =
    openId && resourceKeyFor(openId) === "peering" ? peering : subsea;

  return (
    <SectionWrapper maxWidth="max-w-[1152px]">
      <div className="rounded-2xl border border-console-edge bg-console p-4 shadow-[0_0_100px_rgba(0,229,255,0.03),0_2px_32px_rgba(0,0,0,0.7)] md:p-7">
        <div className="flex flex-col gap-3 border-b border-console-rule pb-3.5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-sans text-[10.5px] leading-[15.75px] font-semibold tracking-[1.47px] text-console-dim uppercase">
              East Africa Optical Routing &amp; Domestic Peering
            </p>
            <h2 className="pt-[5px] font-sans text-lg leading-[25px] font-semibold text-console-bright md:text-xl">
              Terrestrial Fiber Grid &amp; International Subsea Gateways
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
              <InspectorSidebar node={node} onClose={() => setOpenId(null)} />
            ) : (
              <aside className="order-2 flex w-full shrink-0 flex-col overflow-hidden rounded-xl border border-console-rule bg-console-panel lg:order-1 lg:w-[280px]">
                <PanelMessage
                  status={inspectorResource?.status ?? "loading"}
                  loadingLabel="Loading node details…"
                  error={inspectorResource?.error}
                  className="min-h-[180px]"
                />
              </aside>
            )
          ) : null}

          <div className="relative order-1 h-[360px] w-full min-w-0 overflow-hidden rounded-[10px] border border-console-rule bg-console lg:order-2 lg:h-[568px] lg:flex-1">
            {topology?.status === "ready" && topology?.data ? (
              <FiberNetworkMap topology={topology.data} onSelect={setOpenId} />
            ) : (
              <PanelMessage
                status={topology?.status ?? "loading"}
                loadingLabel="Loading network topology…"
                error={topology?.error}
                className="size-full"
              />
            )}
          </div>
        </div>

        <LegendStrip items={LEGEND} />

        <div className="flex flex-col gap-1 pt-3.5 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="font-sans text-[10px] leading-[15px] text-console-dim opacity-65">
            Sources:{" "}
            {NETWORK_SOURCES.map((source, index) => (
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
            v1.0.0
            {topology?.meta
              ? ` · ${topology.meta.fetchedAt.slice(0, 10)}`
              : null}
            {openId ? ` · #${openId}` : null}
          </p>
        </div>

        <p className="pt-2 font-sans text-[10px] leading-[15px] text-console-dim opacity-65">
          Ring and corridor paths are illustrative: no public dataset publishes
          Rwanda&apos;s district fiber route.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default FiberNetworkConsole;
