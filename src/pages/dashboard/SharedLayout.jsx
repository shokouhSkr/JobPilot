import { Sidebar } from "../../components";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <main className="relative bg-[#ebedee] font-roboto text-screen">
      <Outlet />
      <Sidebar />
    </main>
  );
};

export default SharedLayout;
