import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logoff(state) {
      state.user = null;
    },
    registerUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { login, logout, registerUser } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
