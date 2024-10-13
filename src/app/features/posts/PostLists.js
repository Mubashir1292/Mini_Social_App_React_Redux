import { useSelector } from "react-redux";
import { SelectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostLists = () => {
  const posts = useSelector(SelectAllPosts);
  // setting the order like the most recent post must be shown above
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const renderPost =
    posts &&
    orderedPosts.map((post, index) => {
      return (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: 20,
            marginTop: 5,
            borderRadius: 10,
            width: "70%",
            display: "flex",
            flexDirection: "column",
            marginBottom: 20,
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.content.substring(0, 50)}</p>
          {/* Creating the User id  */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <PostAuthor userId={post.author} />
            <TimeAgo timeStamp={post.date} />
          </div>
          <ReactionButtons post={post} />
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
