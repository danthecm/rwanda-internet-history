/**
 * @param {{
 *   status: "loading" | "ready" | "error",
 *   loadingLabel: string,
 *   error?: string | null,
 *   onRetry?: () => void,
 *   className?: string,
 * }} props
 */
export default function PanelMessage({
  status,
  loadingLabel,
  error,
  onRetry,
  className = "",
}) {
  if (status === "loading") {
    return (
      <div
        role="status"
        className={`flex flex-col items-center justify-center gap-3 p-6 text-center ${className}`}
      >
        <span
          aria-hidden="true"
          className="size-5 animate-spin rounded-full border-2 border-console-rule border-t-console-data"
        />
        <p className="font-sans text-[11px] leading-4 text-console-dim">
          {loadingLabel}
        </p>
      </div>
    );
  }

  return (
    <div
      role="alert"
      className={`flex flex-col items-center justify-center gap-3 p-6 text-center ${className}`}
    >
      <p className="max-w-[280px] font-sans text-[11.5px] leading-[18.4px] text-console-dim">
        {error ?? "This data could not be loaded."}
      </p>
      {onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="rounded border border-console-rule px-3 py-1.5 font-sans text-[11px] leading-4 font-semibold text-console-data hover:border-console-data focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-console-data"
        >
          Retry
        </button>
      ) : null}
    </div>
  );
}
