"use client";
import Image from "next/image";
import { CircleUser, Heart } from "lucide-react";
import { shimmer, toBase64 } from "@/utils/imageUtils";

import { BlogPost } from "@/types/blog";
import { formatDate } from "@/utils/formatDate";
import { useSelector } from "react-redux";
import { RootState } from "@/rtk-query/store";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const { toast } = useToast();
  const router = useRouter();

  const { userInfo } = useSelector((state: RootState) => state.auth);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (userInfo) {
      router.push(`/blog/${post.slug}`);
    } else {
      toast({
        title: "Authentication Required",
        description:
          "Please create an account / login to read the full article",
        duration: 3000,
      });
    }
  };

  return (
    <div className="grid hover:shadow-md md:grid-cols-2">
      <div className="relative overflow-hidden pt-[60%]">
        <Image
          src={post.imageSrc}
          alt={post.title}
          fill
          className="object-cover"
          placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div
        onClick={handleClick}
        className="cursor-pointer bg-primary-foreground p-8 text-[10px]"
      >
        <div className="mb-3 flex items-center gap-3">
          <span>
            <CircleUser />
          </span>
          <div>
            {/* <span>{post.author.name}</span> */}
            <span>Admin</span>
            <div className="flex items-center">
              <span>{formatDate(post.createdAt)}</span>
              <span className="mx-2 block size-[2px] rounded-full bg-foreground" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="text-2xl font-bold italic text-primary lg:text-4xl">
            {post.title}
          </h3>
          <div className="line-clamp-3 text-xs font-normal lg:text-base">
            {post.subTitle}
          </div>
        </div>

        {/* <div className="mt-3 pt-3">
          <span className="mb-4 block h-[1px] bg-foreground/20"></span>
          <div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex">
                <div className="flex flex-wrap items-center gap-5">
                  <span>{post.views} views</span>
                  <span>{post.comments.length} comments</span>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <button>
                  <span className="flex items-center gap-2">
                    <span>{post.likes}</span>
                    <span>
                      <Heart size={14} />
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BlogCard;
