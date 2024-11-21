import customFetch from "../../utils/axios";

export const getAllJobsThunk = async (_, thunkAPI) => {
  // console.log(thunkAPI.getState()) => {user: {…}, sidebar: {…}, job: {…}, allJobs: {…}}
  const { page, search, searchType, searchStatus, sort } = thunkAPI.getState().allJobs;

  // let url = "/jobs";
  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
  if (search) url = url + `&search=${search}`;

  try {
    const res = await customFetch.get(url);
    // console.log("data: ", res.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("There was an error");
  }
};

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const res = await customFetch.get("/jobs/stats");
    console.log(res.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
