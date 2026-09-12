import PillarCard from "~/components/ui/pillar-card";
import { PILLARS } from "~/data/home";

export default function PillarsSection({ pillars = PILLARS }) {
  return (
    <section className="w-full">
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-px bg-card-rule md:grid-cols-3">
            {pillars.map((pillar) => (
              <PillarCard
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                accent={pillar.accent}
              >
                {pillar.body}
              </PillarCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
