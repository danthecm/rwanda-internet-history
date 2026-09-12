const MediaCard = ({
  src,
  alt = "",
  credit,
  variant = "scrim",
  children,
  className = "",
}) => {
  const creditLabel = credit?.href ? (
    <a
      href={credit.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block underline underline-offset-2 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {credit.label}
    </a>
  ) : (
    credit?.label
  );

  const overlayClass =
    variant === "gradient" ? "media-scrim-gradient" : "bg-media-scrim/32";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-media ${className}`}
    >
      <img src={src} alt={alt} className="size-full object-cover" />
      <div aria-hidden="true" className={`absolute inset-0 ${overlayClass}`} />

      {children ? (
        <div className="absolute inset-x-0 bottom-0 p-8">
          {children}
          {credit && (
            <p className="pt-3 font-display text-xs leading-[18px] tracking-[0.24px] text-muted">
              {creditLabel}
            </p>
          )}
        </div>
      ) : credit ? (
        <p className="absolute inset-x-0 bottom-0 bg-media-scrim/56 px-3 py-1.5 text-xs text-muted">
          {creditLabel}
        </p>
      ) : null}
    </div>
  );
};

export default MediaCard;
