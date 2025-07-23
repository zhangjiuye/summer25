import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice";
import { userReducer } from "../reducers/userReducer";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
  },
  // 确保 devTools 选项为 true
  devTools: process.env.NODE_ENV !== "production",
});
