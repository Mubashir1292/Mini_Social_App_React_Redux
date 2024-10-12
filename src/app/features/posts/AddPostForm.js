import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postSlice";
function AddPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const onSavePost = (t, c) => {
    // used the prepare callback function for inserting the compatable..
    dispatch(postAdded(t, c));
    setTitle("");
    setContent("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle form submission (if needed)
    if (title && content) {
      onSavePost(title, content);
    }
    // Optionally clear form inputs after submission
    setTitle("");
    setContent("");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Add New Post
      </h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="title" style={{ marginRight: "10px" }}>
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            style={{ width: "100%", height: "30px", padding: "5px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="content"
            style={{ verticalAlign: "top", marginRight: "10px" }}
          >
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={handleContentChange}
            style={{ width: "100%", height: "150px", padding: "5px" }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Submit Post
        </button>
      </form>
    </div>
  );
}

export default AddPostForm;
