import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Decorative Font Awesome glyph.
 *
 * Sized by the inherited font size, not by a width/height utility: the SVG is
 * `height: 1em` and Font Awesome's stylesheet is unlayered, so it outranks
 * Tailwind's layered `size-*` / `h-*` rules. Set `text-[30px]` and a `text-*`
 * colour on this element or its parent; the path fills `currentColor`.
 *
 * @param {{
 *   icon: import("@fortawesome/fontawesome-svg-core").IconDefinition,
 *   className?: string,
 * }} props
 */
export default function Icon({ icon, className = "" }) {
  return (
    <FontAwesomeIcon icon={icon} aria-hidden="true" className={className} />
  );
}
