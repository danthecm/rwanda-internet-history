import { HttpClient } from "./http-client.js";

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

/**
 * @typedef {{
 *   id: string,
 *   shortName: string,
 *   name: string,
 *   length: string,
 *   owners: string,
 *   suppliers: string,
 *   readyForService: string,
 *   landingPoints: { id: string, name: string, country: string }[],
 * }} Cable
 */

export class SubseaService {
  constructor() {
    this.client = new HttpClient({
      source: "TeleGeography Submarine Cable Map",
      baseUrl: "https://www.submarinecablemap.com/api/v3/",
      timeoutMs: 20_000,
    });
  }

  /** @returns {Promise<Cable[]>} */
  async getCables() {
    const records = await Promise.all(
      CABLE_IDS.map((id) => this.client.getJson(`cable/${id}.json`)),
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

  /** @returns {Promise<{ id: string, shortName: string, name: string, paths: number[][][] }[]>} */
  async getGeometry() {
    const collection = await this.client.getJson("cable/cable-geo.json");

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

  /**
   * @param {string[]} ids
   * @returns {Promise<Record<string, { name: string, coordinates: [number, number] }>>}
   */
  async getLandingPoints(ids) {
    const collection = await this.client.getJson("landing-point/landing-point-geo.json");
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
}

export const subseaService = new SubseaService();
