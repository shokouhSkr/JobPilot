import customFetch from "../../utils/axios";

export const registerUserThunk = async (user, thunkAPI) => {
  try {
    const res = await customFetch.post("/auth/register", user);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (user, thunkAPI) => {
  try {
    const res = await customFetch.post("/auth/login", user);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (user, thunkAPI) => {
  try {
    const res = await customFetch.patch("/auth/updateUser", user);
    console.log(res.data, "res.data");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
