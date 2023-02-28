import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["remote", "part-time", "full-time", "internship"],
  jobType: "remote",
  statusOptions: ["interview", "declined", "pending"],
  status: "interview",
  isEditing: false,
  editJobId: "",
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    changeValueHandler: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    clearInputs: () => {
      // in RTK, anything that returns, overwrite the state
      return initialState;
    },
  },
  // extraReducers: (builder) => {},
});

export const { changeValueHandler, clearInputs } = jobSlice.actions;
export default jobSlice.reducer;
