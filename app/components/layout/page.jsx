/**
 * Standard page column, including the top padding that clears the nav bar.
 *
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export default function Page({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1240px] px-4 pt-32 pb-16 md:px-8 md:pt-[200px] ${className}`}
    >
      {children}
    </div>
  );
}
