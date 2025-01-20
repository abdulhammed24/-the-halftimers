"use client";

import { BlogPost } from "@/types/blog";
import PostDetails from "./PostDetails";
import RecentPosts from "./RecentPosts";
import CommentsSection from "./Comments/CommentsSection";
import { useSelector } from "react-redux";
import { RootState } from "@/rtk-query/store";
import Link from "next/link";

interface BlogPostReadProps {
  post: BlogPost;
  recentPosts: BlogPost[];
}

export default function BlogPostRead({ post, recentPosts }: BlogPostReadProps) {
  const { userInfo } = useSelector((state: RootState) => state.auth);

  if (!userInfo) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6 text-center">
        <h1 className="text-red mb-4 text-4xl font-bold">
          Authentication Required
        </h1>
        <p className="mb-6 text-lg text-gray-700">
          Please login to view this blog post
        </p>
        <Link href="/login">
          <p className="text-primary hover:underline">Login</p>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <PostDetails post={post} />
      {/* <CommentsSection  /> */}
      <RecentPosts posts={recentPosts} />
    </div>
  );
}
