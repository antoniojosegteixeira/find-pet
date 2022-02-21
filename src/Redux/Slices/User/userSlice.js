import { createSlice } from "@reduxjs/toolkit";
import { extraReducers } from "./requests";
import reducers from "./reducers";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loginStatus: null,
  },
  reducers: reducers,
  extraReducers: extraReducers,
});

export const { registerUser } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectLoginStatus = (state) => state.user.loginStatus;
export default userSlice.reducer;
