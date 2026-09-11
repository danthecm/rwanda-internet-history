import NetworkCard from "~/components/ui/network-card";
import SectionHeading from "~/components/ui/section-heading";
import { NETWORK } from "~/data/infrastructure";

export default function NetworkSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-[1152px]">
          <SectionHeading
            variant="leftPrimary"
            eyebrow={NETWORK.eyebrow}
            title={NETWORK.title}
          />

          <div className="mt-6.5 grid gap-px bg-card-rule md:mt-12 lg:grid-cols-3">
            {NETWORK.components.map((item) => (
              <NetworkCard
                key={item.title}
                icon={item.icon}
                kicker={item.kicker}
                title={item.title}
                stat={item.stat}
              >
                {item.body}
              </NetworkCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
