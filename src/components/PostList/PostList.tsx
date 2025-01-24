import React from "react";
import st from "../PostList/PostList.module.scss";
import PostItem from "../Post/Post";
import { Post } from "../../types";

type Props = {
  posts: Post[],
};

export default function PostList({ posts }: Props) {
  return (
    <div className={st.root}>
      {posts.map((item) => (
        <PostItem key={item.id} item={item}/>
      ))}
    </div>
  );
}
