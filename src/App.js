import { useState } from "react";
import PostList from "./app/features/posts/PostList";

function App() {
  const [isDark, setIsDark] = useState(true);
  const handleToggle = () => {
    setIsDark((curr) => !curr);
  };
  return (
    <div
      style={{
        backgroundColor: isDark ? "gray" : "white",
        color: isDark ? "white" : "gray",
        height: "100vh",
      }}
    >
      <button
        onClick={handleToggle}
        style={{ position: "absolute", top: 1, right: 1 }}
      >
        {isDark ? "Light" : "black"}
      </button>
      <PostList />
    </div>
  );
}

export default App;
