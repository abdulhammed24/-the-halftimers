export interface Comment {
  id: string;
  content: string;
  user: string;
  replies: Comment[];
  createdAt: string;
}

export interface CommentFormProps {
  onSubmit: (content: string) => void;
  isReply?: boolean;
}

export interface CommentItemProps {
  comment: Comment;
  onAddReply: (parentId: string, content: string) => void;
}
