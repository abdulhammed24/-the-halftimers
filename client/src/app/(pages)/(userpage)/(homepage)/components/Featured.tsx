import BlogCard from "@/components/BlogCard";
import Container from "@/components/Container";
import postsData from "@/data.json";

const Featured: React.FC = () => {
  const posts = postsData.posts;
  const featuredPost = posts[posts.length - 1];

  return (
    <section className="relative z-20 xl:-mt-[100px]">
      <Container width="large">
        <div className="bg-primary-foreground py-10 lg:p-10">
          <div className="relative mb-5 before:absolute before:left-0 before:top-1/2 before:h-px before:w-10 before:-translate-y-1/2 before:bg-foreground before:content-['']">
            <h2 className="ml-14 text-sm font-bold italic">Featured</h2>
          </div>
          <BlogCard {...featuredPost} />
        </div>
      </Container>
    </section>
  );
};

export default Featured;
