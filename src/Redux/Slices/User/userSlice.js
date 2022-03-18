import { createSlice } from "@reduxjs/toolkit";
import { extraReducers } from "./requests";
import reducers from "./reducers";

const initialUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: initialUser,
    loginStatus: "",
    error: "",
  },
  reducers: reducers,
  extraReducers: extraReducers,
});

export const { resetRequest } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
