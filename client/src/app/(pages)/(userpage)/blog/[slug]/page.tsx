import { notFound } from "next/navigation";
import { BlogPost } from "@/types/blog";
import BlogPostRead from "./components/BlogPostRead";

async function fetchPostData(slug: string) {
  try {
    const postResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
      {
        next: { revalidate: 3600 },
      },
    );
    if (!postResponse.ok) {
      console.error(`Failed to fetch post with slug: ${slug}`);
      return notFound();
    }
    const post: BlogPost = await postResponse.json();
    if (!post) return notFound();

    const recentPostsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      {
        next: { revalidate: 3600 },
      },
    );
    if (!recentPostsResponse.ok) {
      console.error("Failed to fetch recent posts");
      return notFound();
    }
    const allPosts: BlogPost[] = await recentPostsResponse.json();
    const recentPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

    return { post, recentPosts };
  } catch (error) {
    console.error("Error fetching post data:", error);
    return notFound();
  }
}

export async function generateStaticParams() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blog`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) {
      return [];
    }
    const posts: BlogPost[] = await response.json();
    return posts.map((post) => ({
      slug: String(post.slug),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await fetchPostData(slug);

  return {
    title: data.post.title,
    description: data.post.subTitle || "Read more about this topic.",
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await fetchPostData(slug);

  return <BlogPostRead post={data.post} recentPosts={data.recentPosts} />;
}
