import { useEffect, useState } from "react";
import axiosInstance from "../axiosinstance";
import { Post, Sort, sortOrder } from "../types";
import PostList from "../components/PostList/PostList";
import PostFilters from "../components/PostFilters/PostFilters";

type Props = {};

export default function Home({}: Props) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<Sort>(Sort.default);
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    let path = '/posts'
    if (search) {
      path += `/search?q=${search}`
    }

    if (sort) {
      path += `?sortBy=${sort}&order=${sortOrder[sort]}`
    }
     
    axiosInstance.get(path).then((res) => {
      setPosts(res.data.posts);
    });
  }, [search, sort, category]);

  return (
    <div className="home">
      <PostFilters 
      setSearch={setSearch}     
      setSort={setSort}
      setCategory={setCategory}
      />
      <PostList posts={posts} />
    </div>
  );
}
