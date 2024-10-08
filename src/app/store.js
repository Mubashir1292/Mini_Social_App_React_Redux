import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/posts/PostSlice";
export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
