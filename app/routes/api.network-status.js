import { failed, ok } from "~/services/api-response.js";
import { peeringService } from "~/services/peering-service.js";

export async function loader() {
  try {
    const status = await peeringService.getStatus();
    return ok(status, {
      source: "PeeringDB",
      sourceUrl: "https://www.peeringdb.com/ix/1032",
      maxAge: 0,
    });
  } catch (error) {
    return failed(error);
  }
}
