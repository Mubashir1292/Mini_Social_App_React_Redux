import React from "react";
import AddPostForm from "./app/features/posts/AddPostForm";
import PostLists from "./app/features/posts/PostLists";

function App() {
  return (
    <React.Fragment>
      <AddPostForm />
      <PostLists />
    </React.Fragment>
  );
}

export default App;
