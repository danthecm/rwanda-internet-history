import StatusPill from "~/components/ui/status-pill";
import { INSPECTOR } from "~/data/routing.js";

const ACCENT_DOTS = {
  amber: "bg-console-amber shadow-[0_0_8px_var(--color-console-amber)]",
  ember: "bg-ember shadow-[0_0_8px_var(--color-ember)]",
  subsea: "bg-console-subsea shadow-[0_0_8px_var(--color-console-subsea)]",
};

/**
 * @typedef {{
 *   name: string,
 *   accent: keyof typeof ACCENT_DOTS,
 *   description: string,
 *   fields: { label: string, value: string }[],
 *   status: string | null,
 *   telemetry: { label: string, value: string }[],
 * }} InspectorNode
 */

/**
 * @param {{
 *   node: InspectorNode,
 *   onClose: () => void,
 *   className?: string,
 * }} props
 */
export default function InspectorSidebar({ node, onClose, className = "" }) {
  return (
    <aside
      aria-live="polite"
      className={`flex flex-col rounded-xl border border-console-rule bg-console-panel ${className}`}
    >
      <div className="border-b border-console-rule bg-console-head px-4 pt-[14px] pb-3">
        <div className="flex items-center justify-between gap-2">
          <p className="font-sans text-[10px] leading-[15px] font-semibold tracking-[1px] text-console-dim uppercase">
            {INSPECTOR.eyebrow}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label={INSPECTOR.closeLabel}
            className="-m-1 flex size-6 items-center justify-center rounded p-1 font-sans text-sm leading-none text-console-dim hover:text-console-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-console-data"
          >
            ×
          </button>
        </div>
        <div className="flex items-center gap-2 pt-1">
          <span
            aria-hidden="true"
            className={`size-2 shrink-0 rounded-full ${ACCENT_DOTS[node.accent]}`}
          />
          <h3 className="font-sans text-sm leading-[21px] font-bold text-console-bright">
            {node.name}
          </h3>
        </div>
      </div>

      <p className="px-4 pt-[14px] pb-[10px] font-sans text-[11.5px] leading-[18.4px] text-console-dim">
        {node.description}
      </p>

      <div aria-hidden="true" className="mx-4 h-px bg-console-rule" />

      <dl className="flex flex-col gap-2.5 px-4 py-3">
        {node.fields.map((field) => (
          <div key={field.label}>
            <dt className="font-sans text-[9.5px] leading-[14.25px] font-medium tracking-[0.76px] text-console-dim uppercase">
              {field.label}
            </dt>
            <dd className="pt-0.5 font-mono text-[11px] leading-[16.5px] text-console-data">
              {field.value}
            </dd>
          </div>
        ))}
      </dl>

      {node.status ? (
        <div className="mt-auto border-t border-console-rule px-4 py-2.5">
          <StatusPill>{node.status}</StatusPill>
        </div>
      ) : null}

      {node.telemetry.length > 0 ? (
        <div className="px-3 pt-2 pb-[14px]">
          <div className="rounded-lg border border-console-rule bg-console-well px-3 py-2.5">
            <p className="font-sans text-[9px] leading-[13.5px] font-semibold tracking-[0.9px] text-console-dim uppercase">
              {INSPECTOR.telemetryTitle}
            </p>
            <dl className="pt-1">
              {node.telemetry.map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-3 pt-1">
                  <dt className="font-sans text-[10px] leading-[15px] text-console-dim">
                    {row.label}
                  </dt>
                  <dd className="font-mono text-[10px] leading-[15px] text-console-live">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      ) : null}
    </aside>
  );
}
