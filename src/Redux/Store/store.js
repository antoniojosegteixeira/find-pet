import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/User/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
