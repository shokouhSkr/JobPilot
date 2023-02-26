import React from "react";
import { logo } from "../assets";

const Logo = () => {
  return (
    <div className="mb-6 flex items-center justify-center">
      <img src={logo} alt="JobPilot logo" className="h-12 w-12 rounded-lg lg:h-14 lg:w-14" />
      <span className="ml-3 text-2xl font-extrabold tracking-widest">JobPilot</span>
    </div>
  );
};

export default Logo;
