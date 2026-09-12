import { beforeEach, describe, expect, it, vi } from "vitest";
import { fetchJson } from "~/services/http.js";
import { PeeringService } from "~/services/peering-service.js";

vi.mock("~/services/http.js", async (importOriginal) => ({
  ...(await importOriginal()),
  fetchJson: vi.fn(),
}));

const EXCHANGE_RECORD = {
  data: [
    {
      id: 1032,
      name: "RINEX",
      name_long: "Rwanda Internet Exchange",
      city: "Kigali",
      country: "RW",
      media: "Ethernet",
      proto_ipv6: 1,
      website: "https://rinex.org.rw",
      updated: "2024-01-01T00:00:00Z",
    },
  ],
};

describe("PeeringService", () => {
  let service;

  beforeEach(() => {
    vi.mocked(fetchJson).mockReset();
    service = new PeeringService();
  });

  describe("getExchange()", () => {
    it("fetches and shapes the RINEX exchange record", async () => {
      vi.mocked(fetchJson).mockResolvedValueOnce(EXCHANGE_RECORD);

      await expect(service.getExchange()).resolves.toEqual({
        id: 1032,
        name: "RINEX",
        longName: "Rwanda Internet Exchange",
        city: "Kigali",
        media: "Ethernet",
        ipv6: true,
        website: "https://rinex.org.rw",
        updated: "2024-01-01T00:00:00Z",
      });
    });

    it("queries PeeringDB by name and ignores exchanges outside Rwanda", async () => {
      vi.mocked(fetchJson).mockResolvedValueOnce({
        data: [{ id: 1, name: "RINEX-like", country: "KE" }],
      });

      await expect(service.getExchange()).rejects.toMatchObject({
        expose: true,
        message: "PeeringDB has no exchange record for RINEX in Rwanda.",
      });

      const [url] = vi.mocked(fetchJson).mock.calls[0];
      expect(url.searchParams.get("name__contains")).toBe("RINEX");
    });

    it("serves concurrent callers from a single upstream request", async () => {
      vi.mocked(fetchJson).mockResolvedValue(EXCHANGE_RECORD);

      const [first, second] = await Promise.all([
        service.getExchange(),
        service.getExchange(),
      ]);

      expect(first).toEqual(second);
      expect(fetchJson).toHaveBeenCalledTimes(1);
    });
  });

  describe("getMembers()", () => {
    it("keeps only operational members with status ok", async () => {
      vi.mocked(fetchJson).mockResolvedValueOnce({
        data: [
          {
            asn: 37053,
            speed: 10000,
            operational: true,
            status: "ok",
            is_rs_peer: true,
          },
          {
            asn: 37140,
            speed: 1000,
            operational: false,
            status: "ok",
            is_rs_peer: false,
          },
          {
            asn: 37220,
            speed: 10000,
            operational: true,
            status: "pending",
            is_rs_peer: false,
          },
        ],
      });

      await expect(service.getMembers(1032)).resolves.toEqual([
        { asn: 37053, speedMbps: 10000, routeServerPeer: true },
      ]);
    });

    it("caches per exchange id", async () => {
      vi.mocked(fetchJson).mockResolvedValue({ data: [] });

      await service.getMembers(1032);
      await service.getMembers(1032);
      await service.getMembers(2000);

      expect(fetchJson).toHaveBeenCalledTimes(2);
    });
  });

  describe("getStatus()", () => {
    it("aggregates peer count and capacity, and reports the exchange id", async () => {
      vi.spyOn(service, "getExchange").mockResolvedValue({ id: 1032 });
      vi.spyOn(service, "getMembers").mockResolvedValue([
        { asn: 1, speedMbps: 1000, routeServerPeer: true },
        { asn: 2, speedMbps: 10000, routeServerPeer: false },
      ]);

      const status = await service.getStatus();

      expect(status.exchangeId).toBe(1032);
      expect(status.active).toBe(true);
      expect(status.peerCount).toBe(2);
      expect(status.capacityMbps).toBe(11000);
      expect(typeof status.checkedAt).toBe("string");
    });

    it("reports inactive when no members are operational", async () => {
      vi.spyOn(service, "getExchange").mockResolvedValue({ id: 1032 });
      vi.spyOn(service, "getMembers").mockResolvedValue([]);

      const status = await service.getStatus();

      expect(status.active).toBe(false);
      expect(status.capacityMbps).toBe(0);
    });
  });

  describe("getPchRecord()", () => {
    it("parses the Rwanda entry and converts traffic from bits to Mbps", async () => {
      vi.mocked(fetchJson).mockResolvedValueOnce([
        { ctry: "Kenya", lat: "-1.29", lon: "36.82" },
        {
          ctry: "Rwanda",
          lat: "-1.95",
          lon: "30.06",
          prts: "12",
          prfs: "150",
          avg: "500000000",
          traf: "1200000000",
          stat: "Active",
          date: "2004-06-01",
          updt: "2024-02-01",
        },
      ]);

      await expect(service.getPchRecord()).resolves.toEqual({
        latitude: -1.95,
        longitude: 30.06,
        ports: 12,
        prefixes: 150,
        trafficAverageMbps: 500,
        trafficPeakMbps: 1200,
        status: "Active",
        established: "2004",
        updated: "2024-02-01",
      });
    });

    it("surfaces a public error when Rwanda is absent from the directory", async () => {
      vi.mocked(fetchJson).mockResolvedValueOnce([{ ctry: "Kenya" }]);

      await expect(service.getPchRecord()).rejects.toMatchObject({
        expose: true,
        message: "The PCH directory lists no exchange in Rwanda.",
      });
    });
  });
});
