import { Link } from "react-router";

// 44px tall in the comp, which falls out of py-3 (12+12) + leading-5 (20).
// The focus ring is not in the design; an interactive control needs one.
const BUTTON_BASE =
  "inline-flex items-center gap-3 rounded-sm bg-secondary px-6 py-3 font-display text-sm leading-5 font-semibold text-accent transition-colors hover:bg-button-hover hover:text-button-hover-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

/**
 * Renders a `<Link>` when `to` is given, otherwise a `<button>`. Any extra props
 * are forwarded to whichever element is rendered.
 *
 * @param {{
 *   children: React.ReactNode,
 *   className?: string,
 *   to?: import("react-router").To,
 * } & Record<string, unknown>} props
 */
export default function Button(props) {
  const { children, className = "", ...rest } = props;

  // The arrow is decorative — the label carries the meaning. `bg-current`
  // plus the mask utility makes it track the text color in every state.
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

  return (
    <button type="button" {...rest} className={`${BUTTON_BASE} ${className}`}>
      {content}
    </button>
  );
}
