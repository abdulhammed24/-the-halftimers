"use client";

import { useState } from "react";
import CommentForm from "./CommentForm";
import { Comment } from "./types";
import CommentItem from "./CommentItem";

export default function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      content: "This is a sample comment",
      user: "John Doe",
      replies: [],
      createdAt: "2 hours ago",
    },
  ]);

  const addComment = (content: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      content,
      user: "Current User",
      replies: [],
      createdAt: "Just now",
    };
    setComments([newComment, ...comments]);
  };

  const addReply = (parentId: string, content: string) => {
    const addReplyToComment = (comment: Comment): Comment => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: Date.now().toString(),
              content,
              user: "Current User",
              replies: [],
              createdAt: "Just now",
            },
          ],
        };
      }
      return {
        ...comment,
        replies: comment.replies.map(addReplyToComment),
      };
    };

    setComments(comments.map(addReplyToComment));
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h2 className="mb-4 text-2xl font-bold italic">Comments</h2>

      <div className="mb-8">
        <CommentForm onSubmit={addComment} />
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onAddReply={addReply}
          />
        ))}
      </div>
    </div>
  );
}
