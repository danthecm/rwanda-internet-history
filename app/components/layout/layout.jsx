import { Outlet } from "react-router";

import Footer from "./footer";
import NavBar from "./nav-bar";

export default function AppLayout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* The nav floats over the page so a full-bleed hero can run behind it.
          Pages own their own gutter and max-width as a result. */}
      <div className="absolute inset-x-0 top-0 z-20 px-4 pt-6 md:px-8 md:pt-[54px]">
        <NavBar />
      </div>
      {/* flex-1 pins the footer to the bottom on short pages. */}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
