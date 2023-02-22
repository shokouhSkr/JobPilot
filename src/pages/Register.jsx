import React, { useState, useEffect } from "react";

import { Button, TextField, Alert } from "@mui/material";
import { logo } from "../assets";

const initialValues = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Register = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validation = () => {
    let temp = [];

    temp.name = values.name ? "" : "Name required *";
    temp.email =
      (values.email ? "" : "Email required *") ||
      (values.email.includes("@") ? "" : "Please provide a valid email address.");
    temp.password =
      (values.password ? "" : "Password required *") ||
      (values.password.length > 5 ? "" : "The password must be a minimum of 6 characters.");

    setErrors({ ...temp });
  };

  const valueHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.value !== "") setErrors({ ...errors, [name]: false });

    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    validation();
  };

  return (
    <div className="grid h-screen place-items-center bg-screen px-[5%] font-roboto text-main md:px-[7%]">
      {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      {/* <Alert severity="success">This is a success alert — check it out!</Alert> */}
      <form
        onSubmit={submitHandler}
        className="max-w-sm rounded-md border-t-[6px] border-main bg-white p-8 text-center shadow-md"
      >
        <header className="mb-6 flex items-center justify-center">
          <img src={logo} alt="JobPilot logo" className="h-14 w-14 rounded-lg" />
          <span className="ml-3 text-2xl font-extrabold tracking-widest">JobPilot</span>
        </header>

        <h3 className="mb-10 text-3xl">{!values.isMember ? "Register" : "Login"}</h3>

        <div className="mb-10 space-y-5 px-[2%]">
          {/* name field */}
          {!values.isMember && (
            <TextField
              fullWidth
              error={errors.name}
              helperText={errors.name}
              id="outlined-name"
              name="name"
              label="Name"
              type="name"
              value={values.name}
              onChange={valueHandler}
            />
          )}
          {/* email field */}
          <TextField
            fullWidth
            error={errors.email}
            helperText={errors.email}
            id="outlined-email"
            name="email"
            label="Email"
            type="email"
            value={values.email}
            onChange={valueHandler}
          />
          {/* password field */}
          <TextField
            fullWidth
            error={errors.password}
            helperText={errors.password}
            id="outlined-password-input"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={values.password}
            onChange={valueHandler}
          />
        </div>

        <div className="mb-6 flex flex-col gap-4 px-[2%]">
          <Button
            variant="contained"
            size="large"
            onClick={submitHandler}
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
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="ml-1 text-primary">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;
