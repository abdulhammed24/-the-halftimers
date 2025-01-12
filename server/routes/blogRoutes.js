import express from "express";
import {
  createBlogPost,
  getAllBlogPosts,
  getBlogBySlug,
  editBlogPost,
  deleteBlogPost,
  addComment,
} from "../controllers/blogController.js";
import { authenticate, isAdmin } from "../middleware/auth.js";

const router = express.Router();

// create a new blog post (only admin can create)
router.post("/", authenticate, isAdmin, createBlogPost);

// get all blog posts (all users)
router.get("/", getAllBlogPosts);

// get a blog post by slug (authenticated users)
router.get("/:slug", authenticate, getBlogBySlug);

// edit a blog post (only admin can edit)
router.put("/:slug", authenticate, isAdmin, editBlogPost);

// delete a blog post (only admin can delete)
router.delete("/:slug", authenticate, isAdmin, deleteBlogPost);

// add a comment to a blog post (authenticated users)
router.post("/:slug/comments", authenticate, addComment);

export default router;
