import { configureStore } from "@reduxjs/toolkit";
import postReducers from "./features/posts/postSlice";
import userReducers from "./features/users/UserSlice";
export const store = configureStore({
  reducer: {
    posts: postReducers,
    users: userReducers,
  },
});
