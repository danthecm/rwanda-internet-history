import { SITE } from "~/data/site";

export default function Footer() {
  const { notice, contactLabel, contactEmail } = SITE.footer;

  return (
    <footer className="bg-surface-2 pt-11.25">
      <div className="w-full border-t border-white/6 p-8 text-center">
        <p className="font-display text-sm leading-4 font-normal text-white">
          © {new Date().getFullYear()} {SITE.name} {notice}
        </p>
        <p className="font-display text-sm leading-4 font-normal text-white pt-1">
          {contactLabel}{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="underline-offset-2 hover:underline focus-visible:underline"
          >
            {contactEmail}
          </a>
        </p>
      </div>
    </footer>
  );
}
