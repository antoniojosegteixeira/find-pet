import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* AUTH API CALLS */

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData) => {
    const { data } = await axios.post("http://localhost:5000/login", {
      data: formData,
    });
    return data;
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData) => {
    const { data } = await axios.post("http://localhost:5000/register", {
      data: formData,
    });
    return data;
  }
);

export const createPost = createAsyncThunk(
  "post/createPost",
  async (formData) => {
    const { data } = await axios.post("http://localhost:5000/create-post", {
      data: formData,
    });
    return data;
  }
);

/* EXTRA REDUCERS */

const loginExtraReducer = {
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

const registerExtraReducer = {
  [registerUser.pending]: (state) => {
    return { ...state, loginStatus: "loading" };
  },
  [registerUser.fulfilled]: (state, action) => {
    return { ...state, loginStatus: "success", user: action.payload };
  },
  [registerUser.rejected]: (state, action) => {
    return { ...state, loginStatus: "failed" };
  },
};

export const extraReducers = {
  ...loginExtraReducer,
  ...registerExtraReducer,
};
