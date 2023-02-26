import React from "react";

import { logo, Jobhunting } from "../assets";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <main className="grid h-screen grid-cols-2 grid-rows-[100px_minmax(650px,_1fr)] gap-x-8 overflow-hidden bg-screen px-[5%] font-roboto text-main md:px-[7%]">
      <nav className="col-span-full mt-2 flex items-center justify-start">
        <Logo />
      </nav>

      <div className="col-span-full flex h-[calc(100vh-100px)] flex-col justify-center md:col-span-1">
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
            <Link to="/register">Login/Register</Link>
          </Button>
        </div>
      </div>
      <div className="col-start-2 hidden h-[calc(100vh-100px)] items-center justify-end md:flex">
        <Jobhunting />
      </div>
    </main>
  );
};

export default Landing;
