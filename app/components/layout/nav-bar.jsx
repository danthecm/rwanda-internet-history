import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";

import menuIcon from "~/assets/icons/menu.svg";
import rwLogo from "~/assets/icons/rw_logo.svg";

const NAV_ITEMS = [
  { to: "/", label: "Policy Foundations" },
  { to: "/infrastructure", label: "Physical Infrastructure" },
  { to: "/metrics", label: "Socio-Economic Metrics" },
];

// No border radius: in the comp the active link is a sharp-cornered rectangle.
const LINK_BASE =
  "flex items-center border p-2.5 font-display text-base leading-5 font-medium whitespace-nowrap transition-colors";

// The inactive border is transparent rather than absent so the box keeps its
// size when a link becomes active.
const LINK_ACTIVE = "border-primary text-secondary";
const LINK_INACTIVE = "border-transparent text-muted hover:text-foreground";

function navLinkClass(extra) {
  return ({ isActive }) =>
    `${LINK_BASE} ${extra} ${isActive ? LINK_ACTIVE : LINK_INACTIVE}`;
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Collapse the mobile panel once navigation settles on a new route. This
  // resets state from a route change rather than syncing an external system,
  // which is what the rule is aimed at; the cascading render is a cheap,
  // one-off close and closing on click alone would miss back/forward nav.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <nav aria-label="Main">
      <div className="mx-auto hidden h-[82px] w-full max-w-[1240px] items-center gap-[26px] rounded-2xl bg-accent/5 px-6 py-2.5 backdrop-blur-xl md:flex">
        <div className="flex flex-1 items-center">
          <img src={rwLogo} alt="Rwanda Digital Evolution" className="size-11.5" />
        </div>
        <ul className="flex items-center gap-[26px]">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={navLinkClass("justify-center")}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:hidden">
        <div className="flex h-18 w-full items-center rounded-2xl bg-ink/[0.39] px-6 py-2.5 backdrop-blur-xl">
          <div className="flex flex-1 items-center">
            <img src={rwLogo} alt="Rwanda Digital Evolution" className="size-8.5" />
          </div>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((open) => !open)}
            className="flex items-center justify-center rounded-lg p-2"
          >
            <img src={menuIcon} alt="" className="size-6" />
          </button>
        </div>

        {/* Animating grid-template-rows avoids hard-coding the panel height. */}
        <div
          id="mobile-nav"
          inert={!isOpen}
          className={`grid overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? "mt-2 grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0">
            <ul className="flex flex-col gap-1 rounded-2xl bg-ink/[0.39] px-6 py-2.5 backdrop-blur-xl">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={navLinkClass("w-full justify-start")}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
