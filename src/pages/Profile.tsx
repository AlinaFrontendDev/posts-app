import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { Post, User } from "../types";
import axiosInstance from "../axiosinstance";
import { useParams } from "react-router";
import PostList from "../components/PostList/PostList";

type Props = {};

export default function Profile({}: Props) {
  const [profile, setProfile] = useState<User | null>(null);
  const { id } = useParams();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axiosInstance.get(`/users/${id}`).then((res) => {
      setProfile(res.data);
    });
    axiosInstance.get(`/posts/user/${id}`).then((res) => {
      setPosts(res.data.posts);
    });
  }, [id]);

  return (
    <div>
      {profile && <ProfileCard profile={profile} />}
      <PostList posts={posts} />
    </div>
  );
}
