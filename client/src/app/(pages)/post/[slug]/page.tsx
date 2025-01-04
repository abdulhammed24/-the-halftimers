import PostDetails from "./PostDetails";
import RecentPosts from "./RecentPosts";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  console.log(slug);

  return (
    <>
      <PostDetails />
      <RecentPosts />
    </>
  );
}
