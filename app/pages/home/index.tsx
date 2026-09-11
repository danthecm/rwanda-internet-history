import Hero from "~/components/policy/hero";
import StatsPanel from "~/components/ui/stats-panel";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Straddles the hero edge as in the comp: panel top y=779, hero bottom y=842. */}
      <div className="relative z-10 mx-auto w-full max-w-[1045px] px-4 md:-mt-[63px] md:px-8">
        <StatsPanel />
      </div>
    </>
  );
}
