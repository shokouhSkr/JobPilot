import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { closeSidebar } from "../../features/sidebar/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";

const SidebarLink = ({ title, path, icon }) => {
  const { isDarkMode } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <li className="mb-5">
      <NavLink
        to={path}
        onClick={() => dispatch(closeSidebar())}
        className={({ isActive }) =>
          `relative mb-1 flex items-center justify-start gap-4 pl-6 text-[17px] transition-all duration-[400ms] ${
            isActive ? `${isDarkMode ? "text-screen" : "text-primaryTxt"}` : "text-secondaryTxt"
          }`
        }
      >
        <span
          className={`${
            location.pathname === path ? "text-primaryBg" : "text-secondaryTxt"
          } transition-all duration-[400ms]`}
        >
          {icon}
        </span>

        <span>{title}</span>

        <span
          className={`${
            location.pathname === path ? "block" : "hidden"
          } absolute right-4 h-[7px] w-[7px] rounded-full bg-primaryBg last:h-[7.2px]`}
        ></span>
      </NavLink>
    </li>
  );
};

export default SidebarLink;
