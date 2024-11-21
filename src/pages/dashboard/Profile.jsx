import { useState } from "react";
import { Header, Wrapper } from "../../components";
import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../features/user/userSlice";
import { toast } from "react-toastify";

const Profile = () => {
	const { isLoading, user } = useSelector((store) => store.user);
	const dispatch = useDispatch();
	const [userData, setUserData] = useState({
		name: user?.name || "",
		lastName: user?.lastName || "",
		email: user?.email || "",
		location: user?.location || "",
	});
	const { isDarkMode } = useSelector((store) => store.user);

	const valueHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setUserData({ ...userData, [name]: value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const { name, lastName, email, location } = userData;

		if (!name || !lastName || !email || !location) {
			toast.error("please fill all out all fields");
			return;
		}

		dispatch(updateUser({ name, lastName, email, location }));
	};

	return (
		<>
			<Header page="Profile" />

			<Wrapper>
				<form
					onSubmit={submitHandler}
					className={`relative rounded-lg ${
						isDarkMode ? "bg-tertiaryBgDark" : "bg-screen"
					} p-4 text-primaryTxt shadow-md`}
				>
					<div className="grid grid-cols-1 grid-rows-4 gap-y-5 sm:grid-cols-2 sm:grid-rows-2 sm:gap-6 sm:p-4 md:mt-5">
						<TextField
							fullWidth
							id="outlined-name"
							name="name"
							label="First Name"
							type="name"
							value={userData.name}
							onChange={valueHandler}
							sx={{
								"& .MuiOutlinedInput-root": {
									color: isDarkMode ? "white" : "inherit",
									"& fieldset": {
										borderColor: isDarkMode ? "white" : "inherit",
										transition: "border-color 0.3s ease",
									},
									"&:hover fieldset": {
										borderColor: "#5932b6",
									},
								},
								"& .MuiInputLabel-root": {
									color: isDarkMode ? "white" : "inherit",
								},
							}}
						/>
						<TextField
							fullWidth
							id="outlined-lastName"
							name="lastName"
							label="Last Name"
							type="lastName"
							value={userData.lastName}
							onChange={valueHandler}
							sx={{
								"& .MuiOutlinedInput-root": {
									color: isDarkMode ? "white" : "inherit",
									"& fieldset": {
										borderColor: isDarkMode ? "white" : "inherit",
										transition: "border-color 0.3s ease",
									},
									"&:hover fieldset": {
										borderColor: "#5932b6",
									},
								},
								"& .MuiInputLabel-root": {
									color: isDarkMode ? "white" : "inherit",
								},
							}}
						/>
						<TextField
							fullWidth
							id="outlined-email"
							name="email"
							label="Email"
							type="email"
							value={userData.email}
							onChange={valueHandler}
							sx={{
								"& .MuiOutlinedInput-root": {
									color: isDarkMode ? "white" : "inherit",
									"& fieldset": {
										borderColor: isDarkMode ? "white" : "inherit",
										transition: "border-color 0.3s ease",
									},
									"&:hover fieldset": {
										borderColor: "#5932b6",
									},
								},
								"& .MuiInputLabel-root": {
									color: isDarkMode ? "white" : "inherit",
								},
							}}
						/>
						<TextField
							fullWidth
							id="outlined-location"
							name="location"
							label="Location"
							type="location"
							value={userData.location}
							onChange={valueHandler}
							sx={{
								"& .MuiOutlinedInput-root": {
									color: isDarkMode ? "white" : "inherit",
									"& fieldset": {
										borderColor: isDarkMode ? "white" : "inherit",
										transition: "border-color 0.3s ease",
									},
									"&:hover fieldset": {
										borderColor: "#5932b6",
									},
								},
								"& .MuiInputLabel-root": {
									color: isDarkMode ? "white" : "inherit",
								},
							}}
						/>
						<Button
							fullWidth
							type="submit"
							disabled={isLoading}
							variant="contained"
							size="large"
							onClick={submitHandler}
							className="py-3 text-base font-normal xs:text-lg"
						>
							Save Changes
						</Button>
					</div>
				</form>
			</Wrapper>
		</>
	);
};

export default Profile;
