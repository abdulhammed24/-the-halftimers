"use client";

import { useState } from "react";
import CommentForm from "./CommentForm";
import { CommentItemProps } from "./types";

export default function CommentItem({ comment, onAddReply }: CommentItemProps) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="mb-4">
      <div className="flex items-start space-x-3">
        <div className="flex-1">
          <div className="rounded-lg bg-gray-50 p-3">
            <div className="flex items-center space-x-2">
              <span className="font-semibold">{comment.user}</span>
              <span className="text-sm text-gray-500">{comment.createdAt}</span>
            </div>
            <p className="mt-1">{comment.content}</p>
          </div>

          <div className="ml-2 mt-2 flex items-center space-x-4">
            <button
              onClick={() => setShowReplyForm(!showReplyForm)}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Reply
            </button>
            {comment.replies.length > 0 && (
              <button
                onClick={() => setShowReplies(!showReplies)}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                {showReplies
                  ? "Hide replies"
                  : `Show ${comment.replies.length} replies`}
              </button>
            )}
          </div>

          {showReplyForm && (
            <div className="mt-3">
              <CommentForm
                isReply
                onSubmit={(content) => {
                  onAddReply(comment.id, content);
                  setShowReplyForm(false);
                }}
              />
            </div>
          )}

          {showReplies && (
            <div className="ml-8 mt-4 space-y-4">
              {comment.replies.map((reply) => (
                <CommentItem
                  key={reply.id}
                  comment={reply}
                  onAddReply={onAddReply}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
