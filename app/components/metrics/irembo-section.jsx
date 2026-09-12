import ChannelCard from "~/components/ui/channel-card";
import Chip from "~/components/ui/chip";
import SectionHeading from "~/components/ui/section-heading";
import { IREMBO } from "~/data/metrics";

export default function IremboSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-[1152px]">
          <SectionHeading
            variant="centered"
            eyebrow={IREMBO.eyebrow}
            title={IREMBO.title}
          >
            {IREMBO.lead}
          </SectionHeading>

          <div className="mt-8 grid gap-6 md:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <div className="flex flex-col gap-5 rounded-2xl border border-card-rule bg-card p-9">
              <p className="font-display text-xs leading-4 font-semibold tracking-[1.2px] text-highlight">
                {IREMBO.narrative.eyebrow}
              </p>

              <h3 className="font-display text-[28px] leading-[38.5px] font-bold text-white">
                {IREMBO.narrative.title}
              </h3>

              <div className="flex flex-col gap-3">
                {IREMBO.narrative.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="font-display text-sm leading-[22.75px] font-normal text-muted-lighter"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="rounded-xl bg-surface-2 px-5 py-4">
                <p className="font-display text-sm leading-5 font-bold text-secondary">
                  {IREMBO.narrative.callout.value}
                </p>
                <p className="pt-1 font-display text-xs leading-4 font-normal text-muted">
                  {IREMBO.narrative.callout.label}
                </p>
              </div>

              <div className="mt-auto">
                <p className="font-display text-[11px] leading-[17px] font-bold tracking-[0.56px] text-muted">
                  {IREMBO.narrative.servicesLabel}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {IREMBO.narrative.services.map((service) => (
                    <Chip key={service.label} icon={service.icon}>
                      {service.label}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {IREMBO.channels.map((channel) => (
                <ChannelCard
                  key={channel.title}
                  icon={channel.icon}
                  title={channel.title}
                  badge={channel.badge}
                >
                  {channel.body}
                </ChannelCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
