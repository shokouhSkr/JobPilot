import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { toast } from "react-toastify";
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";

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

export const createJob = createAsyncThunk("job/createJob", async (job, thunkAPI) => {
  try {
    const res = await customFetch.post("/jobs", job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });

    thunkAPI.dispatch(clearInputs());
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

export const deleteJob = createAsyncThunk("job/deleteJob", async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const res = await customFetch.delete(`/jobs/${jobId}`, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(getAllJobs());
    return res.data.msg;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

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
  },
  extraReducers: (builder) => {
    builder
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

      // we don't need this one in delete job case:
      // .addCase(deleteJob.pending, (state) => {})
      .addCase(deleteJob.fulfilled, (action) => {
        toast.success(action.payload);
      })
      .addCase(deleteJob.rejected, (action) => {
        toast.error(action.payload);
      });
  },
});

export const { changeValueHandler, clearInputs } = jobSlice.actions;
export default jobSlice.reducer;
