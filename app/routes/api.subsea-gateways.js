import { LANDING_POINT_IDS } from "~/data/fiber-network.js";
import { failed, ok } from "~/services/api-response.js";
import { getCables, getLandingPoints } from "~/services/subsea-service.js";

export async function loader() {
  try {
    const [cables, landingPoints] = await Promise.all([
      getCables(),
      getLandingPoints(LANDING_POINT_IDS),
    ]);

    const stations = LANDING_POINT_IDS.map((id) => ({
      id,
      name: landingPoints[id]?.name ?? id,
      coordinates: landingPoints[id]?.coordinates ?? null,
      cables: cables
        .filter((cable) => cable.landingPoints.some((point) => point.id === id))
        .map((cable) => cable.shortName),
    }));

    return ok(
      { cables, stations },
      {
        source: "TeleGeography Submarine Cable Map",
        sourceUrl: "https://www.submarinecablemap.com/",
      },
    );
  } catch (error) {
    return failed(error);
  }
}
