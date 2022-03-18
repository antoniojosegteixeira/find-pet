import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* AUTH API CALLS */

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("http://localhost:5000/login", {
        data: formData,
      });
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/register", {
        data: formData,
      });
      return response.data.user;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

/* EXTRA REDUCERS */

const loginExtraReducer = {
  [loginUser.pending]: (state) => {
    return { ...state, loginStatus: "loading" };
  },
  [loginUser.fulfilled]: (state, action) => {
    localStorage.setItem("user", JSON.stringify(action.payload));
    return { ...state, loginStatus: "success", user: action.payload };
  },
  [loginUser.rejected]: (state, { payload }) => {
    return { ...state, loginStatus: "failed", error: payload };
  },
};

const registerExtraReducer = {
  [registerUser.pending]: (state) => {
    return { ...state, loginStatus: "loading" };
  },
  [registerUser.fulfilled]: (state, action) => {
    localStorage.setItem("user", JSON.stringify(action.payload));
    return { ...state, loginStatus: "success", user: action.payload };
  },
  [registerUser.rejected]: (state, { payload }) => {
    return { ...state, loginStatus: "failed", error: payload };
  },
};

export const extraReducers = {
  ...loginExtraReducer,
  ...registerExtraReducer,
};
