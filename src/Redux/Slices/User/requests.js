import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("auth/loginUser", async () => {
  const { data } = axios.get("https://jsonplaceholder.typicode.com/users");
  return data;
});

export const extraReducers = {
  [loginUser.pending]: (state) => {
    return { ...state, loginStatus: "loading" };
  },
  [loginUser.fulfilled]: (state, action) => {
    return { ...state, loginStatus: "success" };
  },
  [loginUser.rejected]: (state, action) => {
    return { ...state, loginStatus: "failed" };
  },
};
