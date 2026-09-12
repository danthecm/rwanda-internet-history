const StatsPanel = ({ stats }) => {
  return (
    <div className="w-full rounded-[40px] bg-panel px-6 py-7.5 md:px-14 md:py-13.25">
      <div className="flex flex-col gap-9 md:flex-row md:gap-4">
        {stats.map((stat, i) => (
          <div key={stat.label} className="contents">
            {i > 0 && (
              <div
                aria-hidden="true"
                className="hidden w-px self-stretch bg-divider md:block"
              />
            )}
            <div className="flex flex-1 flex-col gap-3 text-center">
              <p className="font-display text-[40px] leading-[45px] font-semibold text-primary-700">
                {stat.value}
              </p>
              <p className="font-sans text-lg leading-7 font-medium text-panel-text">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsPanel;
