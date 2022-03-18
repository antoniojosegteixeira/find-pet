import { createSlice } from "@reduxjs/toolkit";
import { extraReducers } from "./requests";
import reducers from "./reducers";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    loginStatus: "",
    error: "",
  },
  reducers: reducers,
  extraReducers: extraReducers,
});

export const { resetRequest } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
