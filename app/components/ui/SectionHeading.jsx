const VARIANTS = {
  centered: {
    align: "center",
    eyebrow: "text-highlight",
    title: "text-4xl font-black text-white",
  },
  centeredGold: {
    align: "center",
    eyebrow: "text-secondary",
    title: "text-4xl font-bold text-foreground",
  },
  left: {
    align: "left",
    eyebrow: "text-secondary",
    title: "text-4xl font-black text-white",
  },
  leftHighlight: {
    align: "left",
    eyebrow: "text-highlight",
    title: "text-2xl font-black text-white md:text-4xl",
  },
  leftPrimary: {
    align: "left",
    eyebrow: "text-primary",
    title: "text-2xl font-black text-white md:text-4xl",
  },
};

const SectionHeading = ({
  eyebrow,
  title,
  variant = "centered",
  align,
  children,
}) => {
  const styles = VARIANTS[variant] ?? VARIANTS.centered;
  const isLeft = (align ?? styles.align) === "left";

  return (
    <div
      className={`flex flex-col ${
        isLeft ? "items-start text-left" : "items-center text-center"
      }`}
    >
      {eyebrow && (
        <p
          className={`font-display text-xs leading-4 font-semibold tracking-[1.2px] ${styles.eyebrow}`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`pt-3 font-display leading-10 tracking-[-0.72px] ${styles.title}`}
      >
        {title}
      </h2>

      {children && (
        <p
          className={`pt-4 font-display text-base leading-relaxed font-normal text-muted ${
            isLeft ? "max-w-[720px]" : "max-w-[880px]"
          }`}
        >
          {children}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
