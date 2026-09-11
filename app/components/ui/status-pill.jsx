const TONES = {
  live: {
    wrap: "border-console-badge-edge bg-console-badge",
    dot: "bg-console-live shadow-[0_0_7px_var(--color-console-live)]",
    text: "text-console-live",
  },
  unverified: {
    wrap: "border-console-amber/40 bg-console-amber/10",
    dot: "bg-console-amber shadow-[0_0_7px_var(--color-console-amber)]",
    text: "text-console-amber",
  },
  pending: {
    wrap: "border-console-rule bg-console-head",
    dot: "bg-console-dim",
    text: "text-console-dim",
  },
};

/**
 * @param {{
 *   children: React.ReactNode,
 *   tone?: keyof typeof TONES,
 *   className?: string,
 * }} props
 */
export default function StatusPill({ children, tone = "live", className = "" }) {
  const styles = TONES[tone];

  return (
    <span
      className={`inline-flex items-center gap-[7px] rounded-full border px-3 py-[5px] ${styles.wrap} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`size-[7px] shrink-0 rounded-full ${styles.dot}`}
      />
      <span
        className={`font-sans text-[11px] leading-[16.5px] font-semibold ${styles.text}`}
      >
        {children}
      </span>
    </span>
  );
}
