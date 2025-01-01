// "use client";

// import { Suspense } from "react";

// import Hero from "./Hero";
// import BlogContent from "./BlogContent";

// const Blog = () => {
//   return (
//     <>
//       <Hero />
//       <Suspense fallback={<div>Loading...</div>}>
//         <BlogContent />
//       </Suspense>
//     </>
//   );
// };

// export default Blog;

import { Suspense } from "react";
// import postsData from "@/data.json"; // Or fetch from a database
import BlogContent from "./BlogContent";
import Hero from "./Hero";

const BlogPage = async () => {
  // const posts = postsData.posts;

  return (
    <>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        {/* Blog content here */}
        {/* <BlogContent posts={posts} /> */}
        <BlogContent />
      </Suspense>
    </>
  );
};

export default BlogPage;
