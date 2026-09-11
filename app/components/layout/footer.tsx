const CONTACT_EMAIL = "doe8@student.london.ac.uk";

const TEXT = "font-display text-sm leading-4 font-normal text-white";

export default function Footer() {
  return (
    <footer className="bg-surface-2 pt-11.25">
      <div className="w-full border-t border-white/6 p-8 text-center">
        <p className={TEXT}>
          © {new Date().getFullYear()} Rwanda Digital Development Research
          Initiative. All rights reserved.
        </p>
        <p className={`${TEXT} pt-1`}>
          For inquiries, contact:{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline-offset-2 hover:underline focus-visible:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </footer>
  );
}
