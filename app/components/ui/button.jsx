import { Link } from "react-router";

const BUTTON_BASE =
  "inline-flex items-center gap-3 rounded-sm bg-secondary px-6 py-3 font-display text-sm leading-5 font-semibold text-accent transition-colors hover:bg-button-hover hover:text-button-hover-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

/**
 * @param {{
 *   children: React.ReactNode,
 *   className?: string,
 *   to?: import("react-router").To,
 * } & Record<string, unknown>} props
 */
export default function Button(props) {
  const { children, className = "", ...rest } = props;

  const content = (
    <>
      {children}
      <span
        aria-hidden="true"
        className="icon-arrow-right size-4 shrink-0 bg-current"
      />
    </>
  );

  if (rest.to !== undefined) {
    return (
      <Link {...rest} className={`${BUTTON_BASE} ${className}`}>
        {content}
      </Link>
    );
  }

  if (rest.href !== undefined) {
    return (
      <a {...rest} className={`${BUTTON_BASE} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" {...rest} className={`${BUTTON_BASE} ${className}`}>
      {content}
    </button>
  );
}
