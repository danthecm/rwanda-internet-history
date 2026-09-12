import { createCache, fetchJson } from "./http.js";

// TeleGeography API slugs (SEACOM is indexed under Tata TGN-Eurasia)
export const CABLE_IDS = [
  "seacomtata-tgn-eurasia",
  "the-east-african-marine-system-teams",
  "eastern-africa-submarine-system-eassy",
];

const SHORT_NAMES = {
  "seacomtata-tgn-eurasia": "SEACOM",
  "the-east-african-marine-system-teams": "TEAMS",
  "eastern-africa-submarine-system-eassy": "EASSy",
};

const TELEGEOGRAPHY = {
  source: "TeleGeography Submarine Cable Map",
  base: "https://www.submarinecablemap.com/api/v3/",
  timeoutMs: 20_000,
};

const CACHE_TTL_MS = 5 * 60_000;

// The topology and gateway routes both need the landing-point collection, and
// both run in the same request. Sharing one cache keeps that a single fetch.
const cache = createCache(CACHE_TTL_MS);

function get(path) {
  return cache(path, () =>
    fetchJson(new URL(path, TELEGEOGRAPHY.base), TELEGEOGRAPHY),
  );
}

export async function getCables() {
  const records = await Promise.all(
    CABLE_IDS.map((id) => get(`cable/${id}.json`)),
  );

  return records.map((record) => ({
    id: record.id,
    shortName: SHORT_NAMES[record.id] ?? record.name,
    name: record.name,
    length: record.length,
    owners: record.owners,
    suppliers: record.suppliers,
    readyForService: record.rfs,
    landingPoints: (record.landing_points ?? []).map((point) => ({
      id: point.id,
      name: point.name,
      country: point.country,
    })),
  }));
}

export async function getGeometry() {
  const collection = await get("cable/cable-geo.json");

  return CABLE_IDS.map((id) => {
    const feature = (collection?.features ?? []).find(
      (entry) => entry.properties?.id === id,
    );

    return {
      id,
      shortName: SHORT_NAMES[id],
      name: feature?.properties?.name ?? SHORT_NAMES[id],
      paths: feature?.geometry?.coordinates ?? [],
    };
  }).filter((cable) => cable.paths.length > 0);
}

export async function getLandingPoints(ids) {
  const collection = await get("landing-point/landing-point-geo.json");
  const wanted = new Set(ids);

  return Object.fromEntries(
    (collection?.features ?? [])
      .filter((feature) => wanted.has(feature.properties?.id))
      .map((feature) => [
        feature.properties.id,
        {
          name: feature.properties.name,
          coordinates: feature.geometry.coordinates,
        },
      ]),
  );
}
