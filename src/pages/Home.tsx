import { useEffect, useState } from "react";
import axiosInstance from "../axiosinstance";
import { Post } from "../types";
import PostList from "../components/PostList/PostList";
import PostFilters from "../components/PostFilters/PostFilters";

type Props = {};

export default function Home({}: Props) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axiosInstance.get("/posts").then((res) => {
      setPosts(res.data.posts);
    });
  }, []);

  return (
    <div className="home">
      <PostFilters />
      <PostList posts={posts} />
    </div>
  );
}
