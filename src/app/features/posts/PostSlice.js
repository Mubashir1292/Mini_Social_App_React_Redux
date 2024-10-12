import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    title: "Learning redux might be tough",
    content: "Learning Redux-Toolkit and others might be risky",
  },
  {
    id: 2,
    title: "Redux-Toolkit is not difficult at all",
    content:
      "Redux-Toolkit and others might not be risky,Redux-Toolkit and others might not be risky,Redux-Toolkit and others might not be risky",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  // creating the prepare callback for using it..
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const SelectAllPosts = (state) => state.posts;
export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
