import { Outlet } from "react-router";

import Footer from "./footer";
import NavBar from "./nav-bar";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="px-4 pt-6 md:px-8">
        <NavBar />
      </div>
      {/* flex-1 pins the footer to the bottom while the routes are still stubs. */}
      <main className="mx-auto w-full max-w-[1240px] flex-1 px-4 py-8 md:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
