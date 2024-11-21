import React, { useEffect } from "react";
import { Wrapper, BasicSelect, Header } from "../../components";
import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { changeValueHandler, clearInputs } from "../../features/job/jobSlice";
import { createJob, editJob } from "../../features/job/jobSlice";

const AddJob = () => {
	const {
		isLoading,
		statusOptions,
		jobTypeOptions,
		position,
		jobLocation,
		company,
		jobType,
		status,
		isEditing,
		editJobId,
	} = useSelector((store) => store.job);
	const { user, isDarkMode } = useSelector((store) => store.user);
	const dispatch = useDispatch();

	const clearHandler = () => {
		dispatch(clearInputs());
	};

	const submitHandler = (e) => {
		e.preventDefault();

		if (!position || !company || !jobLocation) {
			toast.error("Please fill all the fields");
			return;
		}

		if (isEditing) {
			dispatch(
				editJob({ jobId: editJobId, job: { position, jobLocation, company, jobType, status } })
			);
			return;
		}

		dispatch(createJob({ position, company, jobType, status, jobLocation }));
	};

	const valueHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		dispatch(changeValueHandler({ name, value }));
	};

	useEffect(() => {
		if (!isEditing) dispatch(changeValueHandler({ name: "jobLocation", value: user.location }));
	}, []);

	return (
		<>
			<Header page={isEditing ? "Edit Job" : "Add Job"} />

			<Wrapper>
				<form
					className={`relative mb-12 rounded-lg ${
						isDarkMode ? "bg-tertiaryBgDark" : "bg-screen"
					} p-4 text-primaryTxt shadow-md`}
				>
					<div className="grid grid-cols-1 grid-rows-4 gap-y-5 sm:grid-cols-2 sm:grid-rows-2 sm:gap-6 sm:p-4 md:mt-5">
						<TextField
							fullWidth
							id="outlined-position"
							name="position"
							label="Position"
							type="text"
							value={position}
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
							id="outlined-company"
							name="company"
							label="Company"
							type="text"
							value={company}
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
							name="jobLocation"
							label="Location"
							type="text"
							value={jobLocation}
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
						<BasicSelect
							name="status"
							value={status}
							label="Status"
							options={statusOptions}
							onChange={valueHandler}
						/>
						<BasicSelect
							name="jobType"
							value={jobType}
							label="Job Type"
							options={jobTypeOptions}
							onChange={valueHandler}
						/>
					</div>

					<div className="mt-4 flex flex-col gap-3 sm:my-0 sm:flex-row sm:p-4">
						<Button
							fullWidth
							variant="contained"
							size="large"
							onClick={submitHandler}
							className="p-3 text-base font-normal xs:text-lg"
							disabled={isLoading}
						>
							{isEditing ? "Edit" : "Add"}
						</Button>
						<Button
							fullWidth
							variant="contained"
							size="large"
							onClick={clearHandler}
							className="p-3 text-base font-normal xs:text-lg"
						>
							Clear
						</Button>
					</div>
				</form>
			</Wrapper>
		</>
	);
};

export default AddJob;
