import { shimmer, toBase64 } from "@/utils/imageUtils";
import { CircleUser, EllipsisVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BiMusic } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaSpotify } from "react-icons/fa";

interface Params {
  slug: string;
}

const PostPage: FC<{ params: Params }> = async ({ params }) => {
  const { slug } = await params;

  return (
    <section className="py-10">
      <div className="mx-auto lg:w-[calc(100%-300px-300px)]">
        <div className="flex items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-3">
              <span>
                <CircleUser size={30} />
              </span>
              <div className="flex items-center text-sm">
                <span>Hello</span>
                <span className="mx-2 block size-[2px] rounded-full bg-foreground" />{" "}
                <span>Hello</span>{" "}
                <span className="mx-2 block size-[2px] rounded-full bg-foreground" />{" "}
                <span>Hello</span>
              </div>
            </div>
          </div>
          <div>
            <button>
              <EllipsisVertical size={18} />
            </button>
          </div>
        </div>

        <div>
          <div>
            <h1>Our Top Rookies for the Upcoming Season</h1>
          </div>
          <div>
            <p>
              Create a blog post subtitle that summarizes your post in a few
              short, punchy sentences and entices your audience to continue
              reading.
            </p>
          </div>
          <div>
            <div className="relative overflow-hidden pt-[60%]">
              <Image
                src="https://static.wixstatic.com/media/c22c23_2b30616ff13e440399065674ee385e7d~mv2.jpg/v1/fill/w_740,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_2b30616ff13e440399065674ee385e7d~mv2.jpg"
                alt="post image"
                fill
                className="object-cover"
                placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
              />
            </div>
          </div>
        </div>

        <div>
          <p>
            Welcome to your blog post. Use this space to connect with your
            readers and potential customers in a way that’s current and
            interesting. Think of it as an ongoing conversation where you can
            share updates about business, trends, news, and more.{" "}
          </p>

          <div>
            <p>Design with Ease</p>

            <article>
              “Do you have a design in mind for your blog? Whether you prefer a
              trendy postcard look or you’re going for a more editorial style
              blog - there’s a stunning layout for everyone.”
            </article>
          </div>

          <p>
            Every layout comes with the latest social features built in. Readers
            will be able to easily share posts on social networks like Facebook
            and Twitter, view how many people have liked a post, made comments
            and more. With Wix, building your online community has never been
            easier.
          </p>

          <div>
            <p>Create Relevant Content</p>

            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, dolore iste. Itaque necessitatibus voluptate fugiat
              et amet optio adipisci, eum neque vitae consequuntur ipsam
              deleniti temporibus obcaecati voluptatum aperiam eveniet.
            </article>
          </div>
        </div>

        <div className="mt-14 border-y border-y-foreground/20 py-5">
          <div className="flex flex-wrap justify-between gap-5">
            <div className="flex items-center gap-5">
              <button>
                <FaFacebookF size={16} />
              </button>
              <button>
                <BsTwitterX size={16} />
              </button>{" "}
              <button>
                <FaSpotify size={16} />
              </button>{" "}
              <button>
                <BiMusic size={16} />
              </button>
            </div>

            <div>
              <Link href="/blog?category=baseball" className="text-sm">
                Basketball
              </Link>
            </div>
          </div>
        </div>

        {/* <h1>Post: {slug}</h1> */}
      </div>
    </section>
  );
};

export default PostPage;
