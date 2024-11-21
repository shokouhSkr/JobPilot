import React, { useEffect, useState } from "react";

import { Button, TextField, InputAdornment } from "@mui/material";
import { HiOutlineLockClosed, HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { logo } from "../assets";
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
	const { user, isLoading, isDarkMode } = useSelector((store) => store.user);
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
			// localStorage.setItem("email", email);
			return;
		}

		dispatch(registerUser({ name, email, password }));
	};

	// useEffect(() => {
	//   const emailFromStorage = localStorage.getItem("email");
	//   if (emailFromStorage) {
	//     setValues({ ...values, email: emailFromStorage });
	//   }
	// }, []);

	useEffect(() => {
		if (user) {
			setTimeout(() => {
				navigate("/");
			}, 2000);
		}
	}, [user]);

	return (
		<div
			className={`${
				isDarkMode && "bg-tertiaryBgDark"
			} grid h-screen place-items-center bg-screen px-[5%] font-roboto text-primaryTxt md:px-[7%]`}
		>
			<form onSubmit={submitHandler} className="max-w-sm rounded-2xl bg-white p-8 shadow-md">
				<div className="mb-6 flex items-center justify-start">
					<img src={logo} alt="JobPilot logo" className="h-14 w-14 rounded-xl" />
					<span className={`ml-3 text-3xl font-extrabold tracking-widest text-primaryTxt`}>
						JobPilot
					</span>
				</div>

				<h3 className="mb-6 mt-12 px-[2%] text-3xl font-bold">
					{!values.isMember ? "Register" : "Login"}
				</h3>

				{/* inputs */}
				<div className="mb-10 space-y-4 px-[2%]">
					{/* name field */}
					{!values.isMember && (
						<TextField
							fullWidth
							id="outlined-name"
							name="name"
							label="Name"
							type="name"
							size="small"
							variant="standard"
							value={values.name}
							onChange={valueHandler}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<HiOutlineUser className="text-lg" />
									</InputAdornment>
								),
							}}
						/>
					)}
					{/* email field */}
					<TextField
						fullWidth
						id="outlined-email"
						variant="standard"
						name="email"
						label="Email"
						type="email"
						size="small"
						value={values.email}
						onChange={valueHandler}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<HiOutlineMail className="text-lg" />
								</InputAdornment>
							),
						}}
					/>
					{/* password field */}
					<TextField
						fullWidth
						id="outlined-password-input"
						variant="standard"
						name="password"
						label="Password"
						type="password"
						autoComplete="current-password"
						size="small"
						value={values.password}
						onChange={valueHandler}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<HiOutlineLockClosed className="text-lg" />
								</InputAdornment>
							),
						}}
					/>
				</div>

				{/* buttons */}
				<div className="mb-8 flex flex-col gap-4 px-[2%]">
					<Button
						variant="contained"
						disabled={isLoading}
						type="submit"
						size="small"
						onClick={submitHandler}
						className="rounded-xl bg-primaryBg py-2 text-base font-normal capitalize xs:text-lg"
					>
						{values.isMember ? "Login" : "Submit"}
					</Button>
					<Button
						variant="contained"
						disabled={isLoading}
						size="small"
						onClick={() => dispatch(loginUser({ email: "testUser@test.com", password: "secret" }))}
						className="rounded-xl bg-primaryBg py-2 text-base font-normal capitalize xs:text-lg"
					>
						explore the app
					</Button>
				</div>

				<p className="px-[2%] text-sm text-secondaryTxt xs:text-base">
					{values.isMember ? "Don't have an account?" : "Already have an account?"}
					<button type="button" onClick={toggleMember} className="ml-2 text-primaryTxt">
						{values.isMember ? "Sign Up" : "Sign In"}
					</button>
				</p>
			</form>
		</div>
	);
};

export default Register;
