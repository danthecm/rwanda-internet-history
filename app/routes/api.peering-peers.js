import { failed, ok } from "~/services/api-response.js";
import { peeringService } from "~/services/peering-service.js";

export async function loader() {
  try {
    const exchange = await peeringService.getExchange();
    const [members, pch] = await Promise.all([
      peeringService.getMembers(exchange.id),
      peeringService.getPchRecord(),
    ]);

    const capacityMbps = members.reduce(
      (total, member) => total + member.speedMbps,
      0,
    );

    return ok(
      {
        exchange,
        peerCount: members.length,
        routeServerPeers: members.filter((member) => member.routeServerPeer).length,
        capacityMbps,
        facility: pch,
      },
      { source: "PeeringDB", sourceUrl: `https://www.peeringdb.com/ix/${exchange.id}` },
    );
  } catch (error) {
    return failed(error);
  }
}
