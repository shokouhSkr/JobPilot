import React from "react";
import { logo } from "../../assets";

const Logo = ({ sidebar, form }) => {
  return (
    <div
      className={`flex items-center ${form ? "justify-start" : "justify-center"} ${
        sidebar ? "mb-0" : "mb-6"
      }`}
    >
      <img
        src={logo}
        alt="JobPilot logo"
        className={`rounded-xl ${sidebar ? "h-12 w-12 lg:h-14 lg:w-14" : "h-14 w-14"}`}
      />
      <span className="ml-3 text-3xl font-extrabold tracking-widest text-primaryTxt">JobPilot</span>
    </div>
  );
};

export default Logo;
