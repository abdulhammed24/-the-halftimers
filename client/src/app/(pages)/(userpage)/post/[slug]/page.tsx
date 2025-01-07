import CommentsSection from "../components/Comments/CommentsSection";
import PostDetails from "../components/PostDetails";
import RecentPosts from "../components/RecentPosts";

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
      <CommentsSection />
      <RecentPosts />
    </>
  );
}
