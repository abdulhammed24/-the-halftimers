import { Suspense } from "react";
import Hero from "./Hero";
import dynamic from "next/dynamic";

const BlogContent = dynamic(() => import("./BlogContent"));

const BlogPage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<div>Loading Blog Content...</div>}>
        <BlogContent />
      </Suspense>
    </>
  );
};

export default BlogPage;
