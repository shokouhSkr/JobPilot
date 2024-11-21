import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { useSelector } from "react-redux";

const BasicSelect = ({ label, options, name, value, onChange }) => {
	const { isDarkMode } = useSelector((store) => store.user);

	return (
		<FormControl fullWidth>
			<InputLabel
				id="demo-simple-select-label"
				sx={{
					color: isDarkMode ? "white" : "inherit",
				}}
			>
				{label}
			</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				name={name}
				value={value}
				label={label}
				onChange={onChange}
				sx={{
					color: isDarkMode ? "white" : "inherit",
					"& .MuiOutlinedInput-notchedOutline": {
						borderColor: isDarkMode ? "white" : "inherit",
						transition: "border-color 0.3s ease",
					},
					"&:hover .MuiOutlinedInput-notchedOutline": {
						borderColor: "#5932b6",
					},
					"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
						borderColor: "#5932b6",
					},
				}}
			>
				{options.map((option) => (
					<MenuItem key={option} value={option}>
						{option}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default BasicSelect;
