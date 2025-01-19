import { BlogPost } from "@/types/blog";
import CommentsSection from "./components/Comments/CommentsSection";
import PostDetails from "./components/PostDetails";
import RecentPosts from "./components/RecentPosts";

// Reusable fetch function
async function fetchPostData(slug: string) {
  const postResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
  );
  if (!postResponse.ok) {
    throw new Error(`Failed to fetch post with slug: ${slug}`);
  }
  const post: BlogPost = await postResponse.json();

  const recentPostsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
  );
  if (!recentPostsResponse.ok) {
    throw new Error("Failed to fetch recent posts");
  }
  const allPosts: BlogPost[] = await recentPostsResponse.json();

  const recentPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return { post, recentPosts };
}

export async function generateStaticParams() {
  const posts: BlogPost[] = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
  ).then((res) => res.json());

  return posts.map((post) => ({
    slug: String(post.slug),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { post } = await fetchPostData(slug);

  return {
    title: post.title,
    description: post.description || "Read more about this topic.",
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { post, recentPosts } = await fetchPostData(slug);

  return (
    <>
      <PostDetails post={post} />
      {/* CommentsSection */}
      <RecentPosts posts={recentPosts} />
    </>
  );
}
