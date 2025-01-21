"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import type { BlogPost } from "@/types/blog";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";

interface BlogContentProps {
  initialPosts: BlogPost[];
}

const VALID_CATEGORIES = ["all posts", "featured", "football", "other sports"];

const BlogContent: React.FC<BlogContentProps> = ({ initialPosts }) => {
  const sortedPosts = initialPosts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  const [posts, setPosts] = useState<BlogPost[]>(sortedPosts);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(sortedPosts);
  const router = useRouter();

  return (
    <Suspense fallback={<LatestNewsSkeleton />}>
      <BlogContentInner posts={posts} initialFilteredPosts={filteredPosts} />
    </Suspense>
  );
};

const BlogContentInner: React.FC<{
  posts: BlogPost[];
  initialFilteredPosts: BlogPost[];
}> = ({ posts, initialFilteredPosts }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCategory =
    searchParams.get("category")?.toLowerCase() || "all posts";

  // Validate category
  if (!VALID_CATEGORIES.includes(initialCategory)) {
    notFound();
  }

  const [category, setCategory] = useState(initialCategory);
  const [filteredPosts, setFilteredPosts] = useState(initialFilteredPosts);

  useEffect(() => {
    const newFilteredPosts =
      category === "all posts"
        ? posts
        : posts.filter((post) =>
            post.category.some((cat) => cat.toLowerCase() === category),
          );
    setFilteredPosts(newFilteredPosts);
  }, [category, posts]);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    router.push(`/blog?category=${selectedCategory}`);
  };

  return (
    <section className="relative z-20 xl:-mt-[50px]">
      <div className="mx-auto bg-primary-foreground p-6 lg:w-[calc(100%-160px-160px)] lg:p-10">
        {/* Desktop Navigation */}
        <div className="mb-6 hidden flex-wrap lg:flex">
          {VALID_CATEGORIES.map((cat) => (
            <Link
              href={`/blog?category=${cat}`}
              key={cat}
              className={`px-4 py-2 text-sm font-bold italic ${
                category === cat ? "bg-primary text-white" : "text-foreground"
              }`}
            >
              {cat
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="mb-6 lg:hidden">
          <select
            onChange={handleCategoryChange}
            value={category}
            className="bg-white px-4 py-2 text-sm font-bold italic text-foreground"
          >
            {VALID_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </option>
            ))}
          </select>
        </div>

        {/* Blog Cards */}
        <div className="flex flex-col items-center">
          <div className="mb-12 w-full space-y-10">
            {filteredPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function LatestNewsSkeleton() {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="lg:p-10">
          <Skeleton className="mb-10 h-8 w-48" />
          <div className="space-y-10">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="grid gap-4 md:grid-cols-2">
                <Skeleton className="h-64 w-full" />
                <div className="space-y-4">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-20 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogContent;
