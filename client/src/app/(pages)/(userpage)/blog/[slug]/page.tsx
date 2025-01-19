import { BlogPost } from "@/types/blog";
import CommentsSection from "./components/Comments/CommentsSection";
import PostDetails from "./components/PostDetails";

export async function generateStaticParams() {
  const posts: BlogPost[] = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
  ).then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
  );

  const post = await response.json();

  // console.log(post);

  return (
    <>
      <PostDetails post={post} />
      <CommentsSection />
    </>
  );
}
