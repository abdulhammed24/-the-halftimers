import type { Metadata } from "next";

import { fetchPosts } from "@/utils/fetchPosts";
import BlogContent from "./BlogContent";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Blogs",
};

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <>
      <Hero title="Blog" />
      <BlogContent posts={posts} />
    </>
  );
}
