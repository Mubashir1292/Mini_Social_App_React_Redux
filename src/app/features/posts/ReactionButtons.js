import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";
import React from "react";

const reactionEmojis = {
  thumsUp: "👍",
  heart: "💖",
  wow: "😮",
  rocket: "🚀",
  coffee: "🍿",
};
function ReactionButtons({ post }) {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmojis).map(
    ([name, emoji]) => {
      return (
        <button
          key={name}
          type="button"
          onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: name }))
          }
        >
          {emoji} {post.reactions[name]}
        </button>
      );
    }
  );
  return <div>{reactionButtons}</div>;
}

export default ReactionButtons;
