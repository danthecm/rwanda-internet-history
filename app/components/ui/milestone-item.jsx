export default function MilestoneItem({ year, title, children }) {
  return (
    <li className="flex items-start gap-4 md:gap-10">
      <p className="w-[62px] shrink-0 pt-8 text-right font-display text-2xl leading-8 font-black text-foreground">
        {year}
      </p>

      <div aria-hidden="true" className="shrink-0 pt-10">
        <div className="size-4 rounded-full border-2 border-secondary bg-foreground ring-4 ring-ember/10" />
      </div>

      <div className="min-w-0 flex-1 border-b border-card-rule pt-6 pb-8">
        <h3 className="font-display text-lg leading-7 font-bold text-secondary">
          {title}
        </h3>
        <p className="pt-2 font-display text-base leading-[22.75px] font-normal text-foreground">
          {children}
        </p>
      </div>
    </li>
  );
}
