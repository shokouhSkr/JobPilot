import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";

const initialFiltersState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFiltersState,
};

export const getAllJobs = createAsyncThunk("allJobs/getJobs", async (_, thunkAPI) => {
  let url = "/jobs";

  try {
    const res = await customFetch.get(url);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("There was an error");
  }
});

export const showStats = createAsyncThunk("allJobs/showStats", async (_, thunkAPI) => {
  try {
    const res = await customFetch.get("/jobs/stats");
    console.log(res.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    valuesHandler: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    clearHandler: (state) => {
      return { ...state, ...initialFiltersState };
    },
  },
  extraReducers: (builder) => {
    builder
      // getAllJobs
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload.jobs;
      })
      .addCase(getAllJobs.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      })

      // showStats
      .addCase(showStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stats = action.payload.defaultStats;
        state.monthlyApplications = action.payload.monthlyApplications;
      })
      .addCase(showStats.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export const { showLoading, hideLoading, clearHandler, valuesHandler } = allJobsSlice.actions;
export default allJobsSlice.reducer;
