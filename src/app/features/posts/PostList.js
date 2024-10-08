import React from "react";
import { useSelector } from "react-redux";
import { AllPosts } from "./PostSlice";
function PostList() {
  const posts = useSelector(AllPosts);
  const renderedElements = posts.map((item, index) => (
    <article
      key={index}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        width: "60%",
        borderRadius: 10,
      }}
    >
      <h3>{item.title}</h3>
      <p>{item.content.substring(0, 100)}</p>
    </article>
  ));
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <h2>Posts</h2>
        {renderedElements}
      </div>
    </div>
  );
}

export default PostList;
