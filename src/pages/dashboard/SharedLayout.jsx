import React from "react";

import { Header, Sidebar } from "../../components";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <main className="grid h-screen grid-cols-12 grid-rows-[80px_minmax(500px,_1fr)] bg-screen font-roboto text-screen">
      <Header />
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default SharedLayout;
