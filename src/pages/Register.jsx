import React from "react";

import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { logo } from "../assets";

const Register = () => {
  return (
    <div className="grid h-screen place-items-center bg-screen px-[5%] font-roboto text-main md:px-[7%]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-sm rounded-md border-t-[6px] border-main bg-white p-8 text-center shadow-md"
      >
        <header className="mb-6 flex items-center justify-center">
          <img src={logo} alt="JobPilot logo" className="h-14 w-14 rounded-lg" />
          <span className="ml-3 text-2xl font-extrabold tracking-widest">JobPilot</span>
        </header>
        <h3 className="mb-10 text-3xl">Login</h3>

        <div className="mb-10 space-y-5 px-[2%]">
          <TextField id="email" fullWidth label="Email" type="email" />
          <TextField
            id="password"
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </div>

        <div className="mb-6 flex flex-col gap-4 px-[2%]">
          <Button
            variant="contained"
            size="large"
            className="bg-primary text-lg font-normal capitalize"
          >
            submit
          </Button>
          <Button
            variant="contained"
            size="large"
            className="bg-primary text-lg font-normal capitalize"
          >
            demo app
          </Button>
        </div>

        <p>
          Not a member yet?
          <Link to="/" className="ml-1 text-primary">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
