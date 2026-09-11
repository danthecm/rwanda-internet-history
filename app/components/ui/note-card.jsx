export default function NoteCard({ children, className = "" }) {
  return (
    <div
      className={`flex flex-col justify-center rounded-xl border-l-[3px] border-highlight bg-accent px-3.25 py-4 ${className}`}
    >
      <p className="font-display text-sm leading-[22.75px] font-normal text-muted-lighter">
        {children}
      </p>
    </div>
  );
}
