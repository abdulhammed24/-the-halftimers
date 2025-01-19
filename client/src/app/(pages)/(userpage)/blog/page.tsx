import { fetchPosts } from "@/utils/fetchPosts";
import BlogContent from "./BlogContent";
import Hero from "@/components/Hero";

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <>
      <Hero title="Blog" />
      <BlogContent posts={posts} />
    </>
  );
}
