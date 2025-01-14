import { Suspense } from "react";
import Hero from "../../../../components/Hero";
import dynamic from "next/dynamic";

const BlogContent = dynamic(() => import("./BlogContent"));

const BlogPage = () => {
  return (
    <>
      <Hero title="Blog" />
      {/* <Suspense fallback={<SkeletonBlogCard/>}></Suspense> */}
      <Suspense fallback={<div>Loading Blog Content...</div>}>
        <BlogContent />
      </Suspense>
    </>
  );
};

export default BlogPage;
