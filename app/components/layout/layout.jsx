import { Outlet } from "react-router";

import Footer from "./footer";
import NavBar from "./nav-bar";

export default function AppLayout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="absolute inset-x-0 top-0 z-20 px-4 pt-6 md:px-8 md:pt-[54px]">
        <NavBar />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
