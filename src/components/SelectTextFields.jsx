import { TextField, MenuItem } from "@mui/material";

export default function SelectTextFields({ label, options }) {
  return (
    <TextField id="outlined-select-currency" select label={label} defaultValue={options[0]}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
