import { useState } from "react";
import { Logo } from "../components";
import { Link } from "react-router-dom";
import { Links } from "../utils/sidebarLinks";
import { VscClose } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { closeSidebar } from "../features/sidebar/sidebarSlice";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.sidebar);
  const dispatch = useDispatch();

  return (
    <aside
      className={`${
        isSidebarOpen ? "translate-x-0" : "-translate-x-80"
      } fixed left-0 top-0 bottom-0 m-4 w-72 rounded-xl bg-main transition-all duration-300 md:translate-x-0`}
    >
      <button
        type="button"
        onClick={() => dispatch(closeSidebar())}
        className="absolute top-3 right-3 text-lg text-screen md:hidden"
      >
        <VscClose />
      </button>

      <div className="p-5">
        <Logo sidebar />
      </div>

      <hr className="mb-8" />

      <ul className="px-4">
        {Links.map((link) => {
          const { id, title, path, icon } = link;
          return (
            <li key={id}>
              <Link
                to={path}
                className="mb-1 flex items-center justify-start gap-4 rounded-lg px-10 py-4 text-lg transition-all duration-[400ms] hover:bg-primary hover:pl-12 hover:text-main"
              >
                <span>{icon}</span>
                <span>{title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
