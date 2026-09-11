import { ApiError } from "./api-error.js";
import { HttpClient } from "./http-client.js";

/**
 * @typedef {{
 *   id: number,
 *   name: string,
 *   longName: string,
 *   city: string,
 *   media: string,
 *   ipv6: boolean,
 *   website: string,
 *   updated: string,
 * }} Exchange
 *
 * @typedef {{ asn: number, speedMbps: number, routeServerPeer: boolean }} Member
 *
 * @typedef {{
 *   latitude: number,
 *   longitude: number,
 *   ports: number,
 *   prefixes: number,
 *   trafficAverageMbps: number,
 *   trafficPeakMbps: number,
 *   status: string,
 *   established: string,
 *   updated: string,
 * }} PchRecord
 */

export class PeeringService {
  constructor() {
    /** @type {Promise<Exchange> | null} */
    this.exchange = null;
    this.peeringDb = new HttpClient({
      source: "PeeringDB",
      baseUrl: "https://www.peeringdb.com/api/",
    });
    this.pch = new HttpClient({
      source: "Packet Clearing House",
      baseUrl: "https://www.pch.net/api/",
      timeoutMs: 20_000,
    });
  }

  /** @returns {Promise<Exchange>} */
  async getExchange() {
    this.exchange ??= this.#fetchExchange().catch((error) => {
      this.exchange = null;
      throw error;
    });

    return this.exchange;
  }

  /** @returns {Promise<Exchange>} */
  async #fetchExchange() {
    const body = await this.peeringDb.getJson("ix", {
      searchParams: { name__contains: "RINEX" },
    });
    const record = body?.data?.find((entry) => entry.country === "RW");

    if (!record) {
      throw new ApiError("PeeringDB has no exchange record for RINEX in Rwanda.", {
        source: "PeeringDB",
        code: "NOT_FOUND",
      });
    }

    return {
      id: record.id,
      name: record.name,
      longName: record.name_long,
      city: record.city,
      media: record.media,
      ipv6: Boolean(record.proto_ipv6),
      website: record.website,
      updated: record.updated,
    };
  }

  /**
   * @param {number} exchangeId
   * @returns {Promise<Member[]>}
   */
  async getMembers(exchangeId) {
    const body = await this.peeringDb.getJson("netixlan", {
      searchParams: { ix_id: exchangeId },
    });
    return (body?.data ?? [])
      .filter((entry) => entry.operational && entry.status === "ok")
      .map((entry) => ({
        asn: entry.asn,
        speedMbps: entry.speed,
        routeServerPeer: Boolean(entry.is_rs_peer),
      }));
  }

  /** @returns {Promise<PchRecord>} */
  async getPchRecord() {
    const directory = await this.pch.getJson("ixp/directory/details/RINEX");
    const record = Array.isArray(directory)
      ? directory.find((entry) => entry.ctry === "Rwanda")
      : null;

    if (!record) {
      throw new ApiError("The PCH directory lists no exchange in Rwanda.", {
        source: "Packet Clearing House",
        code: "NOT_FOUND",
      });
    }

    return {
      latitude: Number(record.lat),
      longitude: Number(record.lon),
      ports: Number(record.prts),
      prefixes: Number(record.prfs),
      trafficAverageMbps: Number(record.avg) / 1_000_000,
      trafficPeakMbps: Number(record.traf) / 1_000_000,
      status: record.stat,
      established: String(record.date).slice(0, 4),
      updated: record.updt,
    };
  }

  /** @returns {Promise<{ active: boolean, peerCount: number, capacityMbps: number, checkedAt: string }>} */
  async getStatus() {
    const exchange = await this.getExchange();
    const members = await this.getMembers(exchange.id);

    return {
      active: members.length > 0,
      peerCount: members.length,
      capacityMbps: members.reduce((total, member) => total + member.speedMbps, 0),
      checkedAt: new Date().toISOString(),
    };
  }
}

export const peeringService = new PeeringService();
