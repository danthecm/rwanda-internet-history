export default function MediaCard({
  src,
  alt = "",
  credit,
  className = "",
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-media ${className}`}>
      <img
        src={src}
        alt={alt}
        className="size-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-media-scrim/32" />
      {credit ? (
        <p className="absolute inset-x-0 bottom-0 bg-media-scrim/56 px-3 py-1.5 text-xs text-muted-lighter">
          {credit.href ? (
            <a
              href={credit.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block underline underline-offset-2 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {credit.label}
            </a>
          ) : (
            credit.label
          )}
        </p>
      ) : null}
    </div>
  );
}
