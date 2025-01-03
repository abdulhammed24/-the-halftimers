"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EllipsisVertical, Share, Link } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";

const handleShare = (
  platform: "facebook" | "twitter" | "linkedin" | "link",
) => {
  const url = window.location.href;
  //   console.log(url);
  const title = document.title;
  const text = `Check out this post: ${title}`;

  let shareUrl = "";

  switch (platform) {
    case "facebook":
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      break;
    case "twitter":
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
      break;
    case "linkedin":
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      break;
    case "link":
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
      return;
    default:
      return;
  }

  window.open(shareUrl, "_blank");
};

export default function SharePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="hover:text-primary">
          <EllipsisVertical size={18} />
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        sideOffset={8}
        className="w-44 rounded-md border p-2 shadow-lg"
      >
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100">
              <Share size={16} />
              Share Post
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-sm p-6">
            <DialogHeader>
              <DialogTitle className="text-center font-semibold">
                Share Post
              </DialogTitle>
              <DialogDescription>
                <div className="mt-10 flex justify-around">
                  <button
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white"
                    onClick={() => handleShare("facebook")}
                  >
                    <FaFacebookF size={20} />
                  </button>
                  <button
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1DA1F2] text-white"
                    onClick={() => handleShare("twitter")}
                  >
                    <BsTwitterX size={20} />
                  </button>
                  <button
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0077B5] text-white"
                    onClick={() => handleShare("linkedin")}
                  >
                    <LiaLinkedinIn size={20} />
                  </button>
                  <button
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white"
                    onClick={() => handleShare("link")}
                  >
                    <Link size={20} />
                  </button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </PopoverContent>
    </Popover>
  );
}
