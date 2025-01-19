"use client";

import { shimmer, toBase64 } from "@/utils/imageUtils";
import { CircleUser, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { handleShare } from "@/utils/shareUtils";
import SharePopover from "./SharePopover";
import { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import Container from "@/components/Container";
import { BlogPost } from "@/types/blog";
import { formatDate } from "@/utils/formatDate";

interface PostDetailsProps {
  post: BlogPost;
}

const PostDetails = ({ post }: PostDetailsProps) => {
  const [copied, setCopied] = useState(false);

  return (
    <section className="py-10">
      <Container width="medium">
        <div className="flex items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-3">
              <span>
                <CircleUser size={30} />
              </span>
              <div className="flex flex-wrap items-center text-balance text-sm">
                <span>Admin</span>
                <span className="mx-2 block size-[2px] rounded-full bg-foreground" />{" "}
                <span>{formatDate(post.createdAt)}</span>{" "}
                <span className="mx-2 block size-[2px] rounded-full bg-foreground" />{" "}
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          <SharePopover />
        </div>

        <div className="mt-10">
          <div>
            <h1 className="text-4xl font-bold italic text-primary md:text-6xl">
              {post.title}
            </h1>
          </div>
          <div className="my-10">
            <p className="text-sm font-bold italic">{post.subTitle}</p>
          </div>
          <div>
            <div className="relative overflow-hidden pt-[60%]">
              <Image
                src={post.imageSrc}
                alt="post image"
                fill
                className="object-cover"
                placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        <div className="space-y-5 pt-10">
          {/* <p className="text-sm lg:text-lg">
            Welcome to your blog post. Use this space to connect with your
            readers and potential customers in a way that’s current and
            interesting. Think of it as an ongoing conversation where you can
            share updates about business, trends, news, and more.{" "}
          </p>

          <div>
            <p className="mb-5 text-2xl font-bold italic lg:text-4xl">
              Design with Ease
            </p>

            <blockquote className="my-4 border-l-4 border-l-primary-hover py-1 pl-5">
              <em className="text-lg lg:text-2xl">
                “Do you have a design in mind for your blog? Whether you prefer
                a trendy postcard look or you’re going for a more editorial
                style blog - there’s a stunning layout for everyone.”
              </em>
            </blockquote>
          </div>

          <p className="text-sm lg:text-lg">
            Every layout comes with the latest social features built in. Readers
            will be able to easily share posts on social networks like Facebook
            and Twitter, view how many people have liked a post, made comments
            and more. With Wix, building your online community has never been
            easier.
          </p>

          <div>
            <p className="mb-5 text-2xl font-bold italic lg:text-4xl">
              Create Relevant Content
            </p>

            <blockquote className="my-4 border-l-4 border-l-primary-hover py-1 pl-5">
              <em className="text-lg lg:text-2xl">
                " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, dolore iste. Itaque necessitatibus voluptate fugiat
                et amet optio adipisci, eum neque vitae consequuntur ipsam
                deleniti temporibus obcaecati voluptatum aperiam eveniet."
              </em>
            </blockquote>
          </div> */}

          <div dangerouslySetInnerHTML={{ __html: post.description }}></div>
        </div>

        <div className="mt-14 border-y border-y-foreground/20 py-5">
          <div className="flex flex-wrap justify-between gap-5">
            <div className="flex items-center gap-5">
              <button onClick={() => handleShare("facebook", setCopied)}>
                <FaFacebookF size={18} />
              </button>
              <button onClick={() => handleShare("twitter", setCopied)}>
                <BsTwitterX size={18} />
              </button>
              <button onClick={() => handleShare("linkedin", setCopied)}>
                <LiaLinkedinIn size={18} />
              </button>
              <Tooltip.Provider>
                <Tooltip.Root open={copied}>
                  <Tooltip.Trigger asChild>
                    <button onClick={() => handleShare("link", setCopied)}>
                      <LinkIcon size={20} />
                    </button>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="z-50 rounded-md bg-black px-2 py-1 text-sm text-white"
                      side="top"
                      align="center"
                      sideOffset={8}
                    >
                      Link copied!
                      <Tooltip.Arrow className="fill-black" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            </div>
            <div>
              <Link
                href={`/blog?category=${post.category}`}
                className="text-sm hover:text-primary"
              >
                {post.category}
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="flex items-center justify-between py-5 text-sm">
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
        </div> */}
      </Container>
    </section>
  );
};

export default PostDetails;
