import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./features/sidebar/sidebarSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    sidebar: sidebarSlice,
  },
});
