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

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedCategory = event.target.value;
    window.location.href = `/blog?category=${selectedCategory}`;
  };

  return (
    <>
      <Hero />

      <section className="relative z-20 xl:-mt-[50px]">
        <div className="mx-auto bg-primary-foreground p-6 lg:w-[calc(100%-160px-160px)] lg:p-10">
          {/* Desktop Navigation */}
          <div className="mb-6 hidden flex-wrap lg:flex">
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

          <div className="mb-6 lg:hidden">
            <select
              onChange={handleCategoryChange}
              value={category}
              className="bg-white px-4 py-2 text-sm font-bold italic text-foreground"
            >
              <option value="all posts">All Posts</option>
              <option value="featured">Featured</option>
              <option value="football">Football</option>
              <option value="baseball">Baseball</option>
              <option value="basketball">Basketball</option>
            </select>
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
