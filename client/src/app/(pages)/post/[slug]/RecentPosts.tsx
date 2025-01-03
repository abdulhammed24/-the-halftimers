// components/RecentPosts.tsx
import { Eye, Heart, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "The Swing Heard 'Round the World",
    imageUrl:
      "https://static.wixstatic.com/media/c22c23_3787c81a3c20444991fb4f12f28f95f8~mv2.jpg/v1/fill/w_290,h_163,al_c,q_80,enc_auto/c22c23_3787c81a3c20444991fb4f12f28f95f8~mv2.jpg",
    views: 50,
    comments: 0,
    likes: 2,
  },
  {
    id: 2,
    title: "Will Tyreke Craig Break the Rushing Record?",
    imageUrl:
      "https://static.wixstatic.com/media/c22c23_4664ee93cd4f48c89ba5a5a3f4352477~mv2.jpg/v1/fill/w_290,h_163,al_c,q_80,enc_auto/c22c23_4664ee93cd4f48c89ba5a5a3f4352477~mv2.jpg",
    views: 8,
    comments: 0,
    likes: 0,
  },
  {
    id: 3,
    title: "Ranking This Year's HS Prospects By Position",
    imageUrl:
      "https://static.wixstatic.com/media/c22c23_fcd42bdb27284dc7937c3999aababdac~mv2.jpg/v1/fill/w_290,h_163,al_c,q_80,enc_auto/c22c23_fcd42bdb27284dc7937c3999aababdac~mv2.jpg",
    views: 6,
    comments: 0,
    likes: 2,
  },
];

export default function RecentPosts() {
  return (
    <section className="py-10">
      <div className="mx-auto lg:w-[calc(100%-200px-200px)] lg:min-w-[980px]">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Posts</h2>
          <Link href="#" className="text-sm hover:text-primary">
            See All
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={400}
                height={250}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="mb-2 line-clamp-2 text-lg font-bold italic text-primary lg:text-xl">
                  {post.title}
                </h3>

                <span className="my-4 block h-[1px] bg-foreground/20"></span>

                <div className="flex items-center justify-between gap-3 text-sm text-gray-500">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Eye size={16} />
                      {post.views}
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare size={16} />
                      {post.comments}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {post.likes}
                    <button>
                      <Heart size={16} className="text-primary" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
