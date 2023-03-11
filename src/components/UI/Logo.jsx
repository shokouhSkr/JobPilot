import React from "react";
import { logo } from "../../assets";
import { useSelector } from "react-redux";

const Logo = ({ sidebar }) => {
  const { isDarkMode } = useSelector((store) => store.user);

  return (
    <div
      className={`flex items-center ${sidebar ? "justify-start" : "justify-center"} ${
        sidebar ? "mb-0 p-8" : "mb-6"
      }`}
    >
      <img
        src={logo}
        alt="JobPilot logo"
        className={`${sidebar ? "h-10 w-10 rounded-lg" : "h-14 w-14 rounded-xl"}`}
      />
      <span
        className={`ml-3 font-extrabold tracking-widest ${
          isDarkMode ? "text-screen" : "text-primaryTxt"
        }  ${sidebar ? "text-xl" : "text-3xl"}`}
      >
        JobPilot
      </span>
    </div>
  );
};

export default Logo;
