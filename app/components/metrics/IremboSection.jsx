import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeading from "~/components/ui/SectionHeading";
import SectionWrapper from "~/components/ui/SectionWrapper";
import { IREMBO_CHANNELS, IREMBO_SERVICES } from "~/data/metrics";

const CHIP_STYLES = {
  service: "border-transparent bg-surface-2 text-muted",
  badge: "border-white/20 bg-white/5 text-muted",
  badgeAccent: "border-secondary bg-secondary/15 font-semibold text-secondary",
};

const Chip = ({ children, icon, variant = "service" }) => {
  const tone = CHIP_STYLES[variant] ?? CHIP_STYLES.service;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-display text-xs leading-4 whitespace-nowrap ${tone}`}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </span>
  );
};

const ChannelCard = ({ icon, title, badge, children }) => {
  return (
    <article className="flex flex-col rounded-[14px] border border-card-rule bg-card p-6">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="flex items-center gap-2 font-display text-base leading-6 font-semibold text-white">
          <span aria-hidden="true" className="text-highlight">
            <FontAwesomeIcon icon={icon} />
          </span>
          {title}
        </h3>
        {badge && (
          <Chip variant={badge.tone === "accent" ? "badgeAccent" : "badge"}>
            {badge.label}
          </Chip>
        )}
      </div>

      <p className="pt-3 font-display text-sm leading-[22.75px] font-normal text-muted">
        {children}
      </p>
    </article>
  );
};

const IremboSection = () => {
  return (
    <SectionWrapper maxWidth="max-w-[1152px]">
      <SectionHeading
        variant="centered"
        eyebrow="PUBLIC SECTOR AUTOMATION"
        title="IremboGov: The Citizen's Digital Counter"
      >
        Consolidating manual government bureaucracy into a unified, paperless
        service window.
      </SectionHeading>

      <div className="mt-8 grid gap-6 md:mt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div className="flex flex-col gap-5 rounded-2xl border border-card-rule bg-card p-9">
          <p className="font-display text-xs leading-4 font-semibold tracking-[1.2px] text-highlight">
            CIVIC TRANSFORMATION
          </p>

          <h3 className="font-display text-[28px] leading-[38.5px] font-bold text-white">
            From Paper Queues to Instant Approvals
          </h3>

          <div className="flex flex-col gap-3">
            <p className="font-display text-sm leading-[22.75px] font-normal text-muted">
              Before 2015, routine civil documents — like birth certificates or
              land titles — required exhausting multi-hour bus journeys to
              district offices, manual queues, and processes that could drag on
              for weeks.
            </p>
            <p className="font-display text-sm leading-[22.75px] font-normal text-muted">
              Launched in July 2015, IremboGov eliminated this friction.
              Starting with just 5 essential services, the platform scaled to
              over 100 digitized public workflows by 2020. By making public
              administration accessible via web browser, basic feature phone, or
              village agent, Irembo collapsed weeks of bureaucracy into minutes.
            </p>
          </div>

          <div className="rounded-xl bg-surface-2 px-5 py-4">
            <p className="font-display text-sm leading-5 font-bold text-secondary">
              100+ Services Digitized
            </p>
            <p className="pt-1 font-display text-xs leading-4 font-normal text-muted">
              Launched July 2015 • Unified National Gateway
            </p>
          </div>

          <div className="mt-auto">
            <p className="font-display text-[11px] leading-[17px] font-bold tracking-[0.56px] text-muted">
              CORE DIGITIZED SERVICES
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {IREMBO_SERVICES.map((service) => (
                <Chip key={service.label} icon={service.icon}>
                  {service.label}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {IREMBO_CHANNELS.map((channel) => (
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
    </SectionWrapper>
  );
};

export default IremboSection;
