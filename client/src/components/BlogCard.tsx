import Image from "next/image";
import { CircleUser, Heart } from "lucide-react";
import { shimmer, toBase64 } from "@/utils/imageUtils";

interface BlogCardProps {
  imageSrc: string;
  altText: string;
  author: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  views: number;
  comments: number;
  likes: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageSrc,
  altText,
  author,
  date,
  readTime,
  title,
  description,
  views,
  comments,
  likes,
}) => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="relative overflow-hidden pt-[60%]">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="object-cover"
          placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        />
      </div>
      <div className="bg-primary-foreground p-8 text-[10px]">
        <div className="mb-3 flex items-center gap-3">
          <span>
            <CircleUser />
          </span>
          <div>
            <span>{author}</span>
            <div className="flex items-center">
              <span>{date}</span>{" "}
              <span className="mx-2 block size-[2px] rounded-full bg-foreground" />{" "}
              <span>{readTime}</span>
            </div>
          </div>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="text-2xl font-bold italic text-primary">{title}</h3>
          <p className="line-clamp-3 text-xs font-normal">{description}</p>
        </div>
        <div className="mt-3 pt-3">
          <span className="mb-4 block h-[1px] bg-foreground/20"></span>
          <div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex">
                <div className="flex flex-wrap items-center gap-5">
                  <span>{views} views</span>
                  <span>{comments} comments</span>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <button>
                  <span className="flex items-center gap-2">
                    <span>{likes}</span>
                    <span>
                      <Heart size={14} />
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
