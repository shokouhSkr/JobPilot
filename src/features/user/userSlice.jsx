import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AlertMsg } from "../../components";

const initialState = {
  isLoading: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;
