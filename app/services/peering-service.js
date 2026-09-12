import { createCache, fetchJson, publicError } from "./http.js";

const PEERINGDB = {
  source: "PeeringDB",
  base: "https://www.peeringdb.com/api/",
};
const PCH = {
  source: "Packet Clearing House",
  base: "https://www.pch.net/api/",
  timeoutMs: 20_000,
};

const CACHE_TTL_MS = 5 * 60_000;

function url(base, path, searchParams) {
  const target = new URL(path, base);
  for (const [key, value] of Object.entries(searchParams ?? {})) {
    target.searchParams.set(key, String(value));
  }
  return target;
}

export class PeeringService {
  constructor({ ttlMs = CACHE_TTL_MS } = {}) {
    this.cache = createCache(ttlMs);
  }

  getExchange() {
    return this.cache("exchange", async () => {
      const body = await fetchJson(
        url(PEERINGDB.base, "ix", { name__contains: "RINEX" }),
        PEERINGDB,
      );
      const record = body?.data?.find((entry) => entry.country === "RW");

      if (!record) {
        throw publicError(
          "PeeringDB has no exchange record for RINEX in Rwanda.",
        );
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
    });
  }

  getMembers(exchangeId) {
    return this.cache(`members:${exchangeId}`, async () => {
      const body = await fetchJson(
        url(PEERINGDB.base, "netixlan", { ix_id: exchangeId }),
        PEERINGDB,
      );

      return (body?.data ?? [])
        .filter((entry) => entry.operational && entry.status === "ok")
        .map((entry) => ({
          asn: entry.asn,
          speedMbps: entry.speed,
          routeServerPeer: Boolean(entry.is_rs_peer),
        }));
    });
  }

  getPchRecord() {
    return this.cache("pch", async () => {
      // PCH endpoint dumps the whole directory regardless of path param
      const directory = await fetchJson(
        url(PCH.base, "ixp/directory/details/RINEX"),
        PCH,
      );
      const record = Array.isArray(directory)
        ? directory.find((entry) => entry.ctry === "Rwanda")
        : null;

      if (!record) {
        throw publicError("The PCH directory lists no exchange in Rwanda.");
      }

      return {
        latitude: Number(record.lat),
        longitude: Number(record.lon),
        ports: Number(record.prts),
        prefixes: Number(record.prfs),
        // PCH reports traffic in bits per second.
        trafficAverageMbps: Number(record.avg) / 1_000_000,
        trafficPeakMbps: Number(record.traf) / 1_000_000,
        status: record.stat,
        established: String(record.date).slice(0, 4),
        updated: record.updt,
      };
    });
  }

  async getStatus() {
    const exchange = await this.getExchange();
    const members = await this.getMembers(exchange.id);

    return {
      exchangeId: exchange.id,
      active: members.length > 0,
      peerCount: members.length,
      capacityMbps: members.reduce(
        (total, member) => total + member.speedMbps,
        0,
      ),
      checkedAt: new Date().toISOString(),
    };
  }
}

export const peeringService = new PeeringService();
