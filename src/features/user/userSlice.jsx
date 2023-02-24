import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk("user/registerUser", async (user, thunkAPI) => {
  try {
    const res = await customFetch.post("/auth/register", user);
    return res.data;
  } catch (error) {
    // console.log(error.response.data.msg);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

export const loginUser = createAsyncThunk("user/loginUser", async (user, thunkAPI) => {
  console.log("Login user: ", user);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const { user } = action.payload;

        state.isLoading = false;
        state.user = user;
        console.log(action.payload.user);

        toast.success(`Hello There, ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload);
      });
  },
});

export default userSlice.reducer;
