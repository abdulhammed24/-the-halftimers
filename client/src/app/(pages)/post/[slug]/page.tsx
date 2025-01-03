import PostDetails from "./PostDetails";
import RecentPosts from "./RecentPosts";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <>
      <PostDetails />
      <h1>Post: {slug}</h1>

      <RecentPosts />
    </>
  );
}
