const VARIANTS = {
  centered: {
    root: "items-center text-center",
    eyebrow: "text-highlight",
    body: "max-w-[881px] pt-4 leading-6.5 text-muted",
  },
  left: {
    root: "items-start text-left",
    eyebrow: "text-secondary",
    body: "max-w-[834px] pt-3 leading-6 tracking-[-0.72px] text-white",
  },
};

/**
 * @param {{
 *   eyebrow?: string,
 *   title: string,
 *   variant?: keyof typeof VARIANTS,
 *   children?: React.ReactNode,
 *   className?: string,
 * }} props
 */
export default function SectionHeading({
  eyebrow,
  title,
  variant = "centered",
  children,
  className = "",
}) {
  const styles = VARIANTS[variant];

  return (
    <div className={`flex flex-col ${styles.root} ${className}`}>
      {eyebrow ? (
        <p
          className={`font-display text-xs leading-4 font-semibold tracking-[1.2px] ${styles.eyebrow}`}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2 className="pt-3 font-display text-4xl leading-10 font-black tracking-[-0.72px] text-white">
        {title}
      </h2>

      {children ? (
        <p className={`font-display text-base font-normal ${styles.body}`}>
          {children}
        </p>
      ) : null}
    </div>
  );
}
