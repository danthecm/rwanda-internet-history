/**
 * @param {{
 *   source: string,
 *   sourceUrl: string,
 *   asOf?: string,
 *   className?: string,
 * }} props
 */
export default function SourceNote({ source, sourceUrl, asOf, className = "" }) {
  return (
    <p className={`font-sans text-[11px] leading-4 ${className}`}>
      <a
        href={sourceUrl}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
      >
        {source}
      </a>
      {asOf ? `, ${asOf}` : null}
    </p>
  );
}
