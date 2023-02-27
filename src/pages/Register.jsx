import React, { useEffect, useState } from "react";

import { Button, TextField } from "@mui/material";
import { Logo } from "../components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";

const initialValues = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialValues);
  const { user, isLoading } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const valueHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const toggleMember = () => setValues({ ...values, isMember: !values.isMember });

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }

    dispatch(registerUser({ name, email, password }));
  };

  useEffect(() => {
    if (user)
      setTimeout(() => {
        navigate("/");
      }, 2000);
  }, [user]);

  return (
    <div className="grid h-screen place-items-center bg-screen px-[5%] font-roboto text-main md:px-[7%]">
      <form
        onSubmit={submitHandler}
        className="max-w-sm rounded-md border-t-[6px] border-main bg-white p-8 text-center shadow-md"
      >
        <Logo />
        <h3 className="mb-10 text-3xl">{!values.isMember ? "Register" : "Login"}</h3>

        {/* inputs */}
        <div className="mb-10 space-y-6 px-[2%]">
          {/* name field */}
          {!values.isMember && (
            <TextField
              fullWidth
              id="outlined-name"
              name="name"
              label="Name"
              type="name"
              size="small"
              value={values.name}
              onChange={valueHandler}
            />
          )}
          {/* email field */}
          <TextField
            fullWidth
            id="outlined-email"
            name="email"
            label="Email"
            type="email"
            size="small"
            value={values.email}
            onChange={valueHandler}
          />
          {/* password field */}
          <TextField
            fullWidth
            id="outlined-password-input"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            size="small"
            value={values.password}
            onChange={valueHandler}
          />
        </div>

        {/* buttons */}
        <div className="mb-6 flex flex-col gap-4 px-[2%]">
          <Button
            disabled={isLoading}
            variant="contained"
            size="small"
            onClick={submitHandler}
            className="text-lg font-normal capitalize"
          >
            submit
          </Button>
          <Button
            variant="contained"
            size="small"
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
