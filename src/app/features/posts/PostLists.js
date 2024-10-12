import { useSelector } from "react-redux";
import { SelectAllPosts } from "./postSlice";

const PostLists = () => {
  const posts = useSelector(SelectAllPosts);
  const renderPost =
    posts &&
    posts.map((post, index) => {
      return (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: 10,
            marginTop: 5,
            borderRadius: 10,
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.content.substring(0, 50)}</p>
        </div>
      );
    });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Posts</h2>
      {renderPost}
    </div>
  );
};

export default PostLists;
