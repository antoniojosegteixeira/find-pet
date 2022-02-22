import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData) => {
    const { data } = await axios.post("http://localhost:5000/login", {
      data: formData,
    });
    return data;
  }
);

export const extraReducers = {
  [loginUser.pending]: (state) => {
    return { ...state, loginStatus: "loading" };
  },
  [loginUser.fulfilled]: (state, action) => {
    return { ...state, loginStatus: "success", user: action.payload };
  },
  [loginUser.rejected]: (state, action) => {
    return { ...state, loginStatus: "failed" };
  },
};
