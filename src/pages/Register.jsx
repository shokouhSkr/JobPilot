import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { logo } from "../assets";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const valueHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const toggleBtn = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <div className="grid h-screen place-items-center bg-screen px-[5%] font-roboto text-main md:px-[7%]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="max-w-sm rounded-md border-t-[6px] border-main bg-white p-8 text-center shadow-md"
      >
        <header className="mb-6 flex items-center justify-center">
          <img src={logo} alt="JobPilot logo" className="h-14 w-14 rounded-lg" />
          <span className="ml-3 text-2xl font-extrabold tracking-widest">JobPilot</span>
        </header>

        {!values.isMember && <h3 className="mb-10 text-3xl">Register</h3>}
        {values.isMember && <h3 className="mb-10 text-3xl">Login</h3>}

        <div className="mb-10 space-y-5 px-[2%]">
          {!values.isMember && (
            <TextField
              fullWidth
              id="outlined-name"
              name="name"
              label="Name"
              type="name"
              value={values.name}
              onChange={valueHandler}
              // InputLabelProps={{ shrink: true }}
            />
          )}
          <TextField
            fullWidth
            id="outlined-email"
            name="email"
            label="Email"
            type="email"
            value={values.email}
            onChange={valueHandler}
            // InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            id="outlined-password-input"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={values.password}
            onChange={valueHandler}
            // InputLabelProps={{ shrink: true }}
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

        {values.isMember && (
          <p>
            Not a member yet?
            <Link onClick={toggleBtn} className="ml-1 text-primary">
              Register
            </Link>
          </p>
        )}
        {!values.isMember && (
          <p>
            Already a member?
            <Link onClick={toggleBtn} className="ml-1 text-primary">
              Login
            </Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default Register;
