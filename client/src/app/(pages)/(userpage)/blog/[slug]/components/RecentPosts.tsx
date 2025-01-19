import Container from "@/components/Container";
import { Eye, Heart, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";

export default function RecentPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="py-10">
      <Container width="large">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold italic">Recent Posts</h2>
          <Link href="/blog" className="text-sm hover:text-primary">
            See All
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post._id}>
              <div className="overflow-hidden rounded-lg bg-primary-foreground shadow-sm">
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="mb-2 line-clamp-2 text-lg font-bold italic text-primary lg:text-xl">
                    {post.title}
                  </h3>

                  {/* <span className="my-4 block h-[1px] bg-foreground/20"></span>

                  <div className="flex items-center justify-between gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <Eye size={16} />
                        {post.views}
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageSquare size={16} />
                        {post.comments?.length || 0}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {post.likes}
                      <button>
                        <Heart size={16} className="text-primary" />
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
