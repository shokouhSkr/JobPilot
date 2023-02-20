import React from "react";

import { logo, Jobhunting } from "../assets";
import { Button } from "@mui/material";

const Landing = () => {
  return (
    <div className="grid h-screen grid-cols-2 grid-rows-[100px_minmax(650px,_1fr)] gap-x-8 overflow-hidden bg-[#f5f7f8] px-[5%] font-roboto text-main md:px-[7%]">
      <nav className="col-span-full flex items-center justify-start">
        <img src={logo} alt="JobPilot logo" className="h-14 w-14 rounded-lg" />
        <span className="ml-3 text-2xl font-extrabold tracking-widest">JobPilot</span>
      </nav>

      <div className="col-span-full -mt-8 flex h-[calc(100vh-100px)] flex-col justify-center md:col-span-1">
        <h1 className="mb-8 text-5xl font-extrabold capitalize leading-snug">
          Job <span className="text-primary">tracking</span> app
        </h1>
        <p className="mb-6 leading-relaxed">
          Job hunting can be a challenging and overwhelming experience, especially when you're
          applying for multiple positions. To help keep track of your applications, here we are to
          assist you in the process.
        </p>
        <div className="inline">
          <Button variant="contained" className="rounded-md bg-primary text-lg">
            Login/Register
          </Button>
        </div>
      </div>
      <div className="col-start-2 hidden h-[calc(100vh-100px)] items-center justify-end md:flex">
        <Jobhunting />
      </div>
    </div>
  );
};

export default Landing;
