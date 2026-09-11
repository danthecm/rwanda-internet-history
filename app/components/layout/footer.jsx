export default function Footer() {
  return (
    <footer className="bg-surface-2 pt-11.25">
      <div className="w-full border-t border-white/6 p-8 text-center">
        <p className="font-display text-sm leading-4 font-normal text-white">
          © {new Date().getFullYear()} Rwanda Digital Development Research
          Initiative For Education Purposes Only. All rights reserved.
        </p>
        <p className="font-display text-sm leading-4 font-normal text-white pt-1">
          For inquiries, contact:{" "}
          <a
            href="mailto:doe8@student.london.ac.uk"
            className="underline-offset-2 hover:underline focus-visible:underline"
          >
            doe8@student.london.ac.uk
          </a>
        </p>
      </div>
    </footer>
  );
}
