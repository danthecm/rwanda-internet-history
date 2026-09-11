import { ROUTING_ID } from "~/data/routing.js";

import RoutingConsole from "./routing-console";

/**
 * @param {{ status: object }} props
 */
export default function RoutingSection({ status }) {
  return (
    <section id={ROUTING_ID} className="w-full py-16 md:py-24">
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-[1152px]">
          <RoutingConsole status={status} />
        </div>
      </div>
    </section>
  );
}
