import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: 1,
    title: "Learning redux might be tough",
    content: "Learning Redux-Toolkit and others might be risky",
    author: 2,
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumsUp: 0,
      heart: 0,
      wow: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "Redux-Toolkit is not difficult at all",
    content:
      "Redux-Toolkit and others might not be risky,Redux-Toolkit and others might not be risky,Redux-Toolkit and others might not be risky",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumsUp: 0,
      heart: 0,
      wow: 0,
      rocket: 0,
      coffee: 0,
    },
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
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            author: userId,
            date: new Date().toISOString(),
            reactions: {
              thumsUp: 0,
              heart: 0,
              wow: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const SelectAllPosts = (state) => state.posts;
export const { postAdded, reactionAdded } = postSlice.actions;

export default postSlice.reducer;
