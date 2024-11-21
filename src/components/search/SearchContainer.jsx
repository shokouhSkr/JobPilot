import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BasicSelect } from "../../components";
import { TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { clearHandler, valuesHandler } from "../../features/allJobs/allJobsSlice";

const SearchContainer = () => {
	const { isLoading, search, searchType, searchStatus, sort, sortOptions, page } = useSelector(
		(store) => store.allJobs
	);
	const { statusOptions, jobTypeOptions } = useSelector((store) => store.job);
	const { isDarkMode } = useSelector((store) => store.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation(); // get the current URL location

	// Show query params in the URL
	useEffect(() => {
		// construct query parameters string
		const queryParams = new URLSearchParams(location.search); // => {}

		// sort: sort(=latest), searchStatus: searchStatus(=all), ...
		const paramsToCheck = { searchType, searchStatus, sort, search, page };

		Object.entries(paramsToCheck).forEach(([key, value]) => {
			if (value === undefined || value === "all" || value === "") queryParams.delete(key);
			else queryParams.set(key, value);
		});

		const url = queryParams ? `${location.pathname}?${queryParams.toString()}` : location.pathname;
		navigate(url, { replace: true });
	}, [searchType, searchStatus, sort, page, search]);

	// Reading query params from the URL and update data
	useEffect(() => {
		const queryParams = ["search", "searchType", "searchStatus", "sort", "page"];

		// extract query parameters from the URL
		const searchParams = new URLSearchParams(location.search); // => {}

		queryParams.forEach((param) => {
			const value = searchParams.get(param);
			if (value) {
				dispatch(valuesHandler({ name: param, value: param === "page" ? Number(value) : value }));
			}
		});
	}, [location.search]);

	const searchHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		if (isLoading) return;

		dispatch(valuesHandler({ name, value }));
	};

	const clearFormHandler = () => dispatch(clearHandler());

	return (
		<form
			className={`relative mb-12 rounded-lg ${
				isDarkMode ? "bg-tertiaryBgDark" : "bg-screen text-primaryTxt"
			} shadow-md sm:p-4`}
		>
			<div className="grid grid-cols-1 grid-rows-4 gap-y-5 p-4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-6">
				<TextField
					fullWidth
					id="outlined-search"
					name="search"
					label="Search"
					type="search"
					value={search}
					onChange={searchHandler}
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
					name="searchStatus"
					value={searchStatus}
					label="Status"
					options={["all", ...statusOptions]}
					onChange={searchHandler}
				/>
				<BasicSelect
					name="searchType"
					value={searchType}
					label="Type"
					options={["all", ...jobTypeOptions]}
					onChange={searchHandler}
				/>
				<BasicSelect
					name="sort"
					value={sort}
					label="Sort"
					options={sortOptions}
					onChange={searchHandler}
				/>
				<Button
					fullWidth
					variant="contained"
					size="large"
					onClick={clearFormHandler}
					className="py-3 text-base font-normal xs:text-lg"
				>
					Clear Filters
				</Button>
			</div>
		</form>
	);
};

export default SearchContainer;
