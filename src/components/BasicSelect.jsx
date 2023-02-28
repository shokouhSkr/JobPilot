import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const BasicSelect = ({ label, options, name, value, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name={name}
        value={value}
        label={label}
        onChange={onChange}
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
