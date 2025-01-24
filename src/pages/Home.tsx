import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosinstance";
import { Post } from "../types";
import PostList from "../components/PostList/PostList";

type Props = {};

export default function Home({}: Props) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axiosInstance.get("/posts").then((res) => {
      setPosts(res.data.posts);
    });
  }, []);

  return (
    <div>
      {/* <div
        style={{
          width: "2300px",
          height: "736px",
          background: "rgba(11, 170, 202, 0.4)",
          position: "absolute",
          rotate: "45deg",
          margin: "0 auto",
        }}
      >
        {" "}
      </div> */}
      <PostList posts={posts} />
    </div>
  );
}
