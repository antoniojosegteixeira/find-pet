import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* POST API CALLS */

export const createPost = createAsyncThunk(
  "post/createPost",
  async (formData) => {
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/create-post",
      formData,
      config
    );
    return data;
  }
);

/* EXTRA REDUCERS */

const createPostExtraReducer = {
  [createPost.pending]: (state) => {
    return { ...state, postStatus: "loading" };
  },
  [createPost.fulfilled]: (state) => {
    return { ...state, postStatus: "success" };
  },
  [createPost.rejected]: (state) => {
    return { ...state, postStatus: "failed" };
  },
};

export const extraReducers = {
  ...createPostExtraReducer,
};
