import { createSlice } from "@reduxjs/toolkit";
import { extraReducers } from "./requests";
import reducers from "./reducers";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    postStatus: null,
  },
  reducers: reducers,
  extraReducers: extraReducers,
});

//export const { } = userSlice.actions;
export const selectPostStatus = (state) => state.post.postStatus;
export default postSlice.reducer;
