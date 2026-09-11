import { LANDING_POINT_IDS } from "~/data/routing.js";
import { failed, ok } from "~/services/api-response.js";
import { subseaService } from "~/services/subsea-service.js";

export async function loader() {
  try {
    const [cables, landingPoints] = await Promise.all([
      subseaService.getCables(),
      subseaService.getLandingPoints(LANDING_POINT_IDS),
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
