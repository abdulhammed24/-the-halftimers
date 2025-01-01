"use client";

import BlogCard from "@/components/BlogCard";
import postsData from "@/data.json";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Hero from "./Hero";

const Blog = () => {
  const posts = postsData.posts;
  const searchParams = useSearchParams();
  const category = searchParams.get("category")?.toLowerCase() || "all posts";

  const filteredPosts =
    category === "all posts"
      ? posts
      : posts.filter((post) => post.category.toLowerCase() === category);

  return (
    <>
      <Hero />

      <section className="relative z-20 xl:-mt-[50px]">
        <div className="mx-auto bg-primary-foreground p-6 lg:w-[calc(100%-160px-160px)] lg:p-10">
          <div className="mb-6 flex flex-wrap">
            <Link
              href="/blog"
              className={`px-4 py-2 text-sm font-bold italic ${category === "all posts" ? "bg-primary text-white" : "text-foreground"}`}
            >
              All Posts
            </Link>

            <Link
              href="/blog?category=featured"
              className={`px-4 py-2 text-sm font-bold italic ${category === "featured" ? "bg-primary text-white" : "text-foreground"}`}
            >
              Featured
            </Link>

            <Link
              href="/blog?category=football"
              className={`px-4 py-2 text-sm font-bold italic ${category === "football" ? "bg-primary text-white" : "text-foreground"}`}
            >
              Football
            </Link>

            <Link
              href="/blog?category=baseball"
              className={`px-4 py-2 text-sm font-bold italic ${category === "baseball" ? "bg-primary text-white" : "text-foreground"}`}
            >
              Baseball
            </Link>

            <Link
              href="/blog?category=basketball"
              className={`px-4 py-2 text-sm font-bold italic ${category === "basketball" ? "bg-primary text-white" : "text-foreground"}`}
            >
              Basketball
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-12 w-full space-y-10">
              {filteredPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
