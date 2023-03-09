import { Header, Sidebar } from "../../components";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <main className="relative h-screen bg-[#ebedee] font-roboto text-screen">
      <Header />
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default SharedLayout;
