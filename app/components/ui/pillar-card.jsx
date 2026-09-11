export default function PillarCard({
  icon,
  title,
  accentClassName = "bg-highlight",
  children,
  className = "",
}) {
  return (
    <div className={`flex flex-col bg-card p-8 ${className}`}>
      <p
        aria-hidden="true"
        className="font-display text-[30px] leading-9 font-normal text-white"
      >
        {icon}
      </p>

      <div aria-hidden="true" className={`mt-5 h-0.5 w-8 ${accentClassName}`} />

      <h3 className="mt-4 font-display text-xl leading-7 font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 font-display text-sm leading-[22.75px] font-normal text-muted-card">
        {children}
      </p>
    </div>
  );
}
