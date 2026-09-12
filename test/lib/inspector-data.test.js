import { describe, expect, it } from "vitest";
import {
  buildInspectorNode,
  formatCoordinates,
  resourceKeyFor,
} from "~/lib/inspector-data.js";

describe("inspector-data utilities", () => {
  describe("formatCoordinates()", () => {
    it("formats latitude and longitude with hemispheric signs", () => {
      expect(formatCoordinates([30.0619, -1.9441])).toBe("1.9441°S, 30.0619°E");
      expect(formatCoordinates([-43.1234, 12.3456])).toBe(
        "12.3456°N, 43.1234°W",
      );
    });
  });

  describe("resourceKeyFor()", () => {
    it("returns 'peering' for rinex and 'subsea' for cables and landing stations", () => {
      expect(resourceKeyFor("rinex")).toBe("peering");
      expect(resourceKeyFor("mombasa-kenya")).toBe("subsea");
      expect(resourceKeyFor("seacomtata-tgn-eurasia")).toBe("subsea");
    });
  });

  describe("buildInspectorNode()", () => {
    it("returns null for non-existent node ID", () => {
      expect(
        buildInspectorNode("unknown-id", { peering: null, subsea: null }),
      ).toBeNull();
    });

    it("builds rinex inspector node when peering data is present", () => {
      const mockPeering = {
        exchange: {
          longName: "Rwanda Internet Exchange",
          media: "Ethernet",
          ipv6: true,
          id: 1032,
        },
        peerCount: 15,
        routeServerPeers: 12,
        capacityMbps: 20000,
        facility: {
          status: "Active",
          latitude: -1.95,
          longitude: 30.06,
          ports: 20,
          trafficPeakMbps: 1500.5,
        },
      };

      const node = buildInspectorNode("rinex", {
        peering: mockPeering,
        subsea: null,
      });

      expect(node).not.toBeNull();
      expect(node.name).toBe("RINEX Peering Hub");
      expect(node.accent).toBe("amber");
      expect(node.status).toBe("Active · Operational");
      expect(node.fields).toEqual(
        expect.arrayContaining([
          { label: "Exchange", value: "Rwanda Internet Exchange" },
          { label: "Technology", value: "Ethernet · IPv4 + IPv6" },
          { label: "Capacity", value: "20.0 Gbps aggregate" },
        ]),
      );
    });

    it("builds landing station inspector node when subsea data is present", () => {
      const mockSubsea = {
        stations: [
          {
            id: "mombasa-kenya",
            name: "Mombasa Landing Station",
            coordinates: [39.66, -4.04],
            cables: ["SEACOM", "TEAMS", "EASSy"],
          },
        ],
        cables: [],
      };

      const node = buildInspectorNode("mombasa-kenya", {
        peering: null,
        subsea: mockSubsea,
      });

      expect(node).not.toBeNull();
      expect(node.name).toBe("Mombasa Cable Landing Station");
      expect(node.fields).toEqual(
        expect.arrayContaining([
          { label: "Landing station", value: "Mombasa Landing Station" },
          { label: "Systems landing", value: "3" },
          { label: "Cables", value: "SEACOM · TEAMS · EASSy" },
        ]),
      );
    });
  });
});
