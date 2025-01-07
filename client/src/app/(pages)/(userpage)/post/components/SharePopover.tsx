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
import { EllipsisVertical, Share, Link as LinkIcon } from "lucide-react";

import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useState } from "react";
import { handleShare } from "@/utils/shareUtils";

export default function SharePopover() {
  const [copied, setCopied] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleShareClick = () => {
    setIsPopoverOpen(false);
    setIsDialogOpen(true);
  };

  return (
    <>
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
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
          <button
            onClick={handleShareClick}
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100"
          >
            <Share size={16} />
            Share Post
          </button>
        </PopoverContent>
      </Popover>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-sm p-6">
          <DialogHeader>
            <DialogTitle className="text-center font-semibold">
              Share Post
            </DialogTitle>
            <DialogDescription>
              <span className="mt-10 flex justify-around">
                <button
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white"
                  onClick={() => handleShare("facebook", setCopied)}
                >
                  <FaFacebookF size={20} />
                </button>
                <button
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1DA1F2] text-white"
                  onClick={() => handleShare("twitter", setCopied)}
                >
                  <BsTwitterX size={20} />
                </button>
                <button
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0077B5] text-white"
                  onClick={() => handleShare("linkedin", setCopied)}
                >
                  <LiaLinkedinIn size={20} />
                </button>
                <Tooltip.Provider>
                  <Tooltip.Root open={copied}>
                    <Tooltip.Trigger asChild>
                      <button
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white"
                        onClick={() => handleShare("link", setCopied)}
                      >
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
              </span>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
