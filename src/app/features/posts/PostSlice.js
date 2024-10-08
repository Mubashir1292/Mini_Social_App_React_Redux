import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    title: "Learning Redux Toolkit",
    content:
      "I've learnt the most important topics of the Redux and its toolkit",
  },
  {
    id: 2,
    title: "Slices....",
    content: "The more i say slice,the more i want pizza",
  },
];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

//! getting all the posts i here cause of changes in future will be made here

export const AllPosts = (state) => state.posts;
export default postSlice.reducer;
