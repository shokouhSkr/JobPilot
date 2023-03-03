import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { toast } from "react-toastify";
import { createJobThunk, deleteJobThunk, editJobThunk } from "./jobThunk";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["remote", "part-time", "full-time", "internship"],
  jobType: "remote",
  statusOptions: ["interview", "pending", "declined"],
  status: "interview",
  isEditing: false,
  editJobId: "",
};

export const createJob = createAsyncThunk("job/createJob", createJobThunk);
export const deleteJob = createAsyncThunk("job/deleteJob", deleteJobThunk);
export const editJob = createAsyncThunk("job/editJob", editJobThunk);

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
      return { ...initialState, jobLocation: getUserFromLocalStorage()?.location || "" };
    },
    setEditJob: (state, action) => {
      return { ...state, isEditing: true, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      // create job
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success(`Job created`);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      })

      // delete job
      // we don't need this one in delete job case:
      // .addCase(deleteJob.pending, (state) => {})
      .addCase(deleteJob.fulfilled, (_, action) => {
        toast.success(action.payload);
      })
      .addCase(deleteJob.rejected, (_, action) => {
        toast.error(action.payload);
      })

      // edit job
      .addCase(editJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success(`Job modified`);
      })
      .addCase(editJob.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export const { changeValueHandler, clearInputs, setEditJob } = jobSlice.actions;
export default jobSlice.reducer;
