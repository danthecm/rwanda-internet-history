import {
  GEO_NODES,
  HUBS,
  LANDING_POINT_IDS,
  NATIONAL_RING,
  TRANSIT_CORRIDORS,
  WAYPOINTS,
} from "~/data/fiber-network.js";
import { failed, ok } from "~/services/api-response.js";
import { getGeometry, getLandingPoints } from "~/services/subsea-service.js";

const VIEW_BOUNDS = { minLon: 36, maxLon: 44.5, minLat: -12, maxLat: 4 };

const LABEL_TARGETS = {
  "seacomtata-tgn-eurasia": [42.2, -5.6],
  "the-east-african-marine-system-teams": [43, -3.6],
  "eastern-africa-submarine-system-eassy": [41, -6.4],
};

export function isVisible([lon, lat]) {
  return (
    lon >= VIEW_BOUNDS.minLon &&
    lon <= VIEW_BOUNDS.maxLon &&
    lat >= VIEW_BOUNDS.minLat &&
    lat <= VIEW_BOUNDS.maxLat
  );
}

export function clipToView(paths) {
  const runs = [];

  for (const path of paths) {
    let run = [];

    for (let i = 1; i < path.length; i += 1) {
      const [ax, ay] = path[i - 1];
      const [bx, by] = path[i];
      const steps = Math.max(2, Math.ceil(Math.hypot(bx - ax, by - ay) * 8));

      for (let step = 0; step <= steps; step += 1) {
        const t = step / steps;
        const point = [ax + (bx - ax) * t, ay + (by - ay) * t];

        if (isVisible(point)) {
          run.push(point);
        } else {
          if (run.length > 1) runs.push(run);
          run = [];
        }
      }
    }

    if (run.length > 1) runs.push(run);
  }

  return runs;
}

export function anchorNear(runs, target) {
  const [targetLon, targetLat] = target;
  let best = null;
  let bestDistance = Infinity;

  for (const run of runs) {
    for (const point of run) {
      const distance = Math.hypot(point[0] - targetLon, point[1] - targetLat);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = point;
      }
    }
  }

  return best;
}

export async function loader() {
  try {
    const [cables, landingPoints] = await Promise.all([
      getGeometry(),
      getLandingPoints(LANDING_POINT_IDS),
    ]);

    const hubs = HUBS.map((hub) => ({
      id: hub.id,
      mapLabel: hub.mapLabel,
      accent: hub.accent,
      coordinates: landingPoints[hub.id]?.coordinates ?? GEO_NODES[hub.node],
    }));

    return ok(
      {
        ring: NATIONAL_RING.map(([from, to]) => [
          GEO_NODES[from],
          GEO_NODES[to],
        ]),
        corridors: TRANSIT_CORRIDORS.map(([from, to]) => [
          GEO_NODES[from],
          GEO_NODES[to],
        ]),
        waypoints: WAYPOINTS.map((waypoint) => ({
          ...waypoint,
          coordinates: GEO_NODES[waypoint.id],
        })),
        hubs,
        cables: cables
          .map((cable) => {
            const paths = clipToView(cable.paths);
            return {
              id: cable.id,
              shortName: cable.shortName,
              name: cable.name,
              paths,
              labelAnchor: anchorNear(
                paths,
                LABEL_TARGETS[cable.id] ?? [43, -3.5],
              ),
            };
          })
          .filter((cable) => cable.paths.length > 0),
      },
      {
        source: "TeleGeography Submarine Cable Map",
        sourceUrl: "https://www.submarinecablemap.com/",
      },
    );
  } catch (error) {
    return failed(error);
  }
}
