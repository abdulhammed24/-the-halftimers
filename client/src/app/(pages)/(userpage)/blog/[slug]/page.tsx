import CommentsSection from "./components/Comments/CommentsSection";
import PostDetails from "./components/PostDetails";

interface Post {
  slug: string;
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch(
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
