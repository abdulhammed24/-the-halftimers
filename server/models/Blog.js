import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const blogSchema = new mongoose.Schema(
  {
    imageSrc: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, default: Date.now },
    readTime: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    views: { type: Number, default: 0 },
    comments: [commentSchema],
    likes: { type: Number, default: 0 },
    category: { type: [String], required: true },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
