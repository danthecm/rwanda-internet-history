import { NODE_COPY } from "~/data/routing.js";

const COLORS = {
  background: "#070D14",
  land: "#0C1524",
  landHover: "#132035",
  border: "#1E293B",
  countryLabel: "#334155",
  rwanda: "#17283C",
  ring: "#FF6B00",
  transit: "#FF9100",
  subsea: "#00E5FF",
  bright: "#F8FAFC",
  dim: "#94A3B8",
};

const CABLE_LABEL_OFFSET = [0, -14];

const ACCENTS = {
  ember: COLORS.ring,
  amber: "#F59E0B",
  subsea: COLORS.subsea,
};

/** @param {{ name: string }} params */
function tooltipFormatter(params) {
  const copy = NODE_COPY[params.name];
  if (!copy) return "";

  return `
    <div style="font-weight:600;color:${ACCENTS[copy.accent]};font-size:13px;margin-bottom:4px">
      ${copy.name}
    </div>
    <div style="max-width:260px;font-size:11px;line-height:1.45;color:#CBD5E1">
      ${copy.description}
    </div>
  `;
}

/**
 * @param {{ topology: object, reduceMotion: boolean }} options
 */
export default function buildMapOption({ topology, reduceMotion }) {
  const cableSegments = topology.cables.flatMap((cable) =>
    cable.paths.map((coords) => ({ name: cable.id, coords })),
  );

  const streams = {
    name: "Data Streams",
    type: "lines",
    coordinateSystem: "geo",
    zlevel: 4,
    silent: true,
    effect: {
      show: true,
      period: 10,
      trailLength: 0.35,
      symbol: "arrow",
      symbolSize: 6,
      color: "#FFFFFF",
    },
    lineStyle: { width: 0, opacity: 0, curveness: 0.12 },
    data: topology.corridors.map((coords) => ({ coords })),
  };

  return {
    backgroundColor: COLORS.background,
    animation: !reduceMotion,
    animationDuration: reduceMotion ? 0 : 400,
    animationDurationUpdate: reduceMotion ? 0 : 200,
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(10,19,34,0.96)",
      borderColor: "#1E293B",
      borderWidth: 1,
      padding: [10, 14],
      textStyle: { color: COLORS.bright, fontSize: 12 },
      formatter: tooltipFormatter,
    },
    geo: {
      map: "east-africa",
      roam: true,
      aspectScale: 1,
      boundingCoords: [
        [29.2, 2.2],
        [44, -8.3],
      ],
      label: { show: true, color: COLORS.countryLabel, fontSize: 10 },
      itemStyle: {
        areaColor: COLORS.land,
        borderColor: COLORS.border,
        borderWidth: 1,
      },
      emphasis: {
        label: { color: COLORS.bright },
        itemStyle: { areaColor: COLORS.landHover },
      },
      regions: [
        {
          name: "Rwanda",
          itemStyle: {
            areaColor: COLORS.rwanda,
            borderColor: COLORS.ring,
            borderWidth: 2,
          },
        },
      ],
    },
    series: [
      {
        name: "National Ring",
        type: "lines",
        coordinateSystem: "geo",
        zlevel: 2,
        silent: true,
        lineStyle: {
          color: COLORS.ring,
          width: 3,
          opacity: 0.95,
          curveness: 0.05,
        },
        data: topology.ring.map((coords) => ({ coords })),
      },
      {
        name: "Transit Corridors",
        type: "lines",
        coordinateSystem: "geo",
        zlevel: 3,
        silent: true,
        lineStyle: {
          color: COLORS.transit,
          width: 2,
          type: "dashed",
          opacity: 0.85,
          curveness: 0.12,
        },
        data: topology.corridors.map((coords) => ({ coords })),
      },
      ...(reduceMotion ? [] : [streams]),
      {
        name: "Subsea Cables",
        type: "lines",
        coordinateSystem: "geo",
        polyline: true,
        zlevel: 2,
        lineStyle: { color: COLORS.subsea, width: 2.5, opacity: 0.85 },
        emphasis: {
          lineStyle: {
            width: 4.5,
            color: "#FFFFFF",
            shadowBlur: 10,
            shadowColor: COLORS.subsea,
          },
        },
        data: cableSegments,
      },
      {
        name: "Cable Labels",
        type: "scatter",
        coordinateSystem: "geo",
        zlevel: 5,
        symbolSize: 1,
        label: {
          show: true,
          position: "top",
          formatter: (params) => params.data.shortName,
          color: COLORS.subsea,
          fontSize: 10,
          fontWeight: "bold",
          fontFamily: "Cousine, monospace",
          backgroundColor: "rgba(7,13,20,0.72)",
          borderColor: "rgba(0,229,255,0.3)",
          borderWidth: 1,
          borderRadius: 2,
          padding: [2, 4],
        },
        data: topology.cables
          .filter((cable) => cable.labelAnchor)
          .map((cable) => ({
            name: cable.id,
            shortName: cable.shortName,
            value: cable.labelAnchor,
            label: { offset: CABLE_LABEL_OFFSET },
          })),
      },
      {
        name: "Waypoints",
        type: "scatter",
        coordinateSystem: "geo",
        zlevel: 3,
        silent: true,
        symbolSize: 6,
        itemStyle: { color: COLORS.transit },
        label: {
          show: true,
          position: "top",
          formatter: "{b}",
          color: COLORS.dim,
          fontSize: 10,
        },
        data: topology.waypoints.map((waypoint) => ({
          name: waypoint.label,
          value: waypoint.coordinates,
        })),
      },
      {
        name: "Core Hubs",
        type: reduceMotion ? "scatter" : "effectScatter",
        coordinateSystem: "geo",
        zlevel: 5,
        symbolSize: 8,
        rippleEffect: { brushType: "stroke", scale: 5, period: 1.5 },
        label: {
          show: true,
          position: "right",
          formatter: (params) => params.data.mapLabel,
          color: COLORS.bright,
          fontWeight: "bold",
          fontSize: 11,
        },
        data: topology.hubs.map((hub) => ({
          name: hub.id,
          mapLabel: hub.mapLabel,
          value: hub.coordinates,
          itemStyle: { color: ACCENTS[hub.accent] },
        })),
      },
    ],
  };
}
