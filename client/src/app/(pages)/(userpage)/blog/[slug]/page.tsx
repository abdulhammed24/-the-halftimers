import { BlogPost } from "@/types/blog";
import CommentsSection from "./components/Comments/CommentsSection";
import PostDetails from "./components/PostDetails";
import RecentPosts from "./components/RecentPosts";

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

  const postResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
  );
  const post: BlogPost = await postResponse.json();

  const recentPostsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
  );
  const allPosts: BlogPost[] = await recentPostsResponse.json();

  const recentPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PostDetails post={post} />
      {/* CommentsSection */}
      <RecentPosts posts={recentPosts} />
    </>
  );
}
