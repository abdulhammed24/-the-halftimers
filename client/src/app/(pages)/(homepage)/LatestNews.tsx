import BlogCard from "@/components/BlogCard";
import postsData from "@/data.json";

const LatestNews: React.FC = () => {
  const posts = postsData.posts;

  return (
    <section className="py-10">
      <div className="mx-auto p-6 lg:w-[calc(100%-160px-160px)] lg:p-10">
        <div className="mb-10">
          <h2 className="text-3xl font-bold italic">The Latest News</h2>
        </div>
        <div className="space-y-10">
          {posts.slice(0, posts.length - 1).map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
