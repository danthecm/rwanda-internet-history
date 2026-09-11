import { useEffect, useRef } from "react";

import compassHline from "~/assets/icons/map-compass-hline.svg";
import compassRing from "~/assets/icons/map-compass-ring.svg";
import compassVline from "~/assets/icons/map-compass-vline.svg";
import scaleLine from "~/assets/icons/map-scale-line.svg";
import scaleTickMid from "~/assets/icons/map-scale-tick-mid.svg";
import scaleTick from "~/assets/icons/map-scale-tick.svg";
import { MAP_OVERLAYS, NODE_COPY } from "~/data/routing.js";

import buildMapOption from "./map-option.js";

const MAP_DESCRIPTION =
  "Map of East Africa showing Rwanda's national fiber ring, cross-border transit corridors through Uganda, Kenya and Tanzania, and the SEACOM, TEAMS and EASSy subsea cables landing at Mombasa and Dar es Salaam.";

/**
 * @param {{
 *   topology: object,
 *   onSelect: (id: string) => void,
 *   className?: string,
 * }} props
 */
export default function RoutingMap({ topology, onSelect, className = "" }) {
  const hostRef = useRef(null);
  const onSelectRef = useRef(onSelect);

  useEffect(() => {
    onSelectRef.current = onSelect;
  }, [onSelect]);

  useEffect(() => {
    const host = hostRef.current;
    let chart = null;
    let observer = null;
    let disposed = false;

    const timeout = setTimeout(async () => {
      const [echarts, geo] = await Promise.all([
        import("echarts"),
        import("~/assets/geo/east-africa.geo.json"),
      ]);

      if (disposed) return;

      echarts.registerMap("east-africa", geo.default);
      chart = echarts.init(host, null, { renderer: "canvas" });

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      chart.setOption(buildMapOption({ topology, reduceMotion }));
      chart.on("click", (params) => {
        if (NODE_COPY[params.name]) onSelectRef.current(params.name);
      });

      observer = new ResizeObserver(() => {
        window.requestAnimationFrame(() => {
          if (!disposed) chart.resize();
        });
      });
      observer.observe(host);
    }, 0);

    return () => {
      disposed = true;
      clearTimeout(timeout);
      observer?.disconnect();
      chart?.dispose();
    };
  }, [topology]);

  const inspectable = [
    ...topology.hubs.map((hub) => ({ id: hub.id, label: hub.mapLabel })),
    ...topology.cables.map((cable) => ({ id: cable.id, label: cable.name })),
  ];

  return (
    <div className={`relative ${className}`}>
      <div
        ref={hostRef}
        role="img"
        aria-label={MAP_DESCRIPTION}
        className="size-full"
      />

      <ul className="sr-only">
        {inspectable.map((node) => (
          <li key={node.id}>
            <button type="button" onClick={() => onSelect(node.id)}>
              Inspect {node.label}
            </button>
          </li>
        ))}
      </ul>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[13px] right-[13px] size-[34px] opacity-[0.42]"
      >
        <img src={compassRing} alt="" className="absolute inset-[2px] size-[30px]" />
        <img
          src={compassVline}
          alt=""
          className="absolute top-[3px] left-1/2 h-[28px] w-px -translate-x-1/2"
        />
        <img
          src={compassHline}
          alt=""
          className="absolute top-1/2 left-[3px] h-px w-[28px] -translate-y-1/2"
        />
        <p className="absolute inset-x-0 top-[4px] text-center font-sans text-[7px] font-bold text-console-bright">
          {MAP_OVERLAYS.compassLabel}
        </p>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[15px] bottom-[13px] h-[18px] w-[92px] opacity-50"
      >
        <img src={scaleLine} alt="" className="absolute top-[6px] left-0 h-px w-[80px]" />
        <img src={scaleTick} alt="" className="absolute top-[2px] left-0 h-[8px] w-px" />
        <img
          src={scaleTick}
          alt=""
          className="absolute top-[2px] left-[80px] h-[8px] w-px"
        />
        <img
          src={scaleTickMid}
          alt=""
          className="absolute top-[4px] left-[40px] h-[4px] w-px"
        />
        <p className="absolute top-[10px] left-[25px] w-[30px] text-center font-sans text-[7px] text-console-dim">
          {MAP_OVERLAYS.scaleLabel}
        </p>
      </div>
    </div>
  );
}
