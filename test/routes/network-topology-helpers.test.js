import { describe, expect, it } from "vitest";
import {
  anchorNear,
  clipToView,
  isVisible,
} from "~/routes/api.network-topology.js";

describe("network-topology helper functions", () => {
  describe("isVisible()", () => {
    it("returns true for coordinates inside East Africa map view bounds", () => {
      expect(isVisible([39.66, -4.04])).toBe(true);
      expect(isVisible([40.0, 0.0])).toBe(true);
    });

    it("returns false for coordinates outside view bounds", () => {
      expect(isVisible([10.0, 0.0])).toBe(false);
      expect(isVisible([50.0, 0.0])).toBe(false);
      expect(isVisible([40.0, 10.0])).toBe(false);
      expect(isVisible([40.0, -20.0])).toBe(false);
    });
  });

  describe("clipToView()", () => {
    it("filters and slices paths to only segments visible in the viewport", () => {
      const paths = [
        [
          [30.0, 0.0],
          [40.0, 0.0],
          [42.0, -2.0],
        ],
      ];

      const clipped = clipToView(paths);
      expect(clipped.length).toBeGreaterThan(0);
      for (const run of clipped) {
        expect(run.length).toBeGreaterThan(1);
        for (const point of run) {
          expect(isVisible(point)).toBe(true);
        }
      }
    });
  });

  describe("anchorNear()", () => {
    it("finds the point in runs closest to the target coordinate", () => {
      const runs = [
        [
          [38.0, -4.0],
          [40.0, -4.0],
          [42.0, -4.0],
        ],
      ];

      const closest = anchorNear(runs, [40.1, -3.9]);
      expect(closest).toEqual([40.0, -4.0]);
    });
  });
});
