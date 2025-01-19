"use client";

import { useState } from "react";
import { CommentFormProps } from "./types";

export default function CommentForm({
  onSubmit,
  isReply = false,
}: CommentFormProps) {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    onSubmit(content);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={isReply ? "Write a reply..." : "Write a comment..."}
        className="w-full resize-none rounded-lg border p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        rows={isReply ? 2 : 3}
      />
      <button className="mt-2 rounded-lg bg-primary px-4 py-2 text-sm text-white hover:bg-primary-hover">
        {isReply ? "Reply" : "Comment"}
      </button>
    </form>
  );
}
