import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  posts: 0,
};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});
