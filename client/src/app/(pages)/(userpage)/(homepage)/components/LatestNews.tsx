import BlogCard from "@/components/BlogCard";
import Container from "@/components/Container";
import postsData from "@/data.json";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const LatestNews: React.FC = () => {
  const posts = postsData.posts;

  return (
    <section className="py-10">
      <Container width="large">
        <div className="lg:p-10">
          <div className="mb-10">
            <h2 className="text-3xl font-bold italic">The Latest News</h2>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-12 w-full space-y-10">
              {posts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>

            <Link
              href="/blog"
              className="flex h-10 w-fit items-center border border-foreground px-5"
            >
              <span className="text-sm text-foreground">All Posts</span>
              <div>
                <ChevronRight className="text-foreground" />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LatestNews;
