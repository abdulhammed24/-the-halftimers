import Blog from "../models/Blog.js";

// Create a new blog post
export const createBlogPost = async (req, res) => {
  const { imageSrc, readTime, title, subTitle, description, category, slug } = req.body;

  try {
    // Check if a blog post with the same slug already exists
    const existingPost = await Blog.findOne({ slug });
    if (existingPost) {
      return res.status(400).json({ message: "A blog post with this slug already exists." });
    }

    // Create the new blog post
    const blogPost = await Blog.create({
      imageSrc,
      author: req.user.id,
      readTime,
      title,
      subTitle,
      description,
      category,
      slug,
    });

    res.status(201).json(blogPost);
  } catch (error) {
    res.status(400).json({ message: "Failed to create blog post." });
  }
};

// Get all blog posts
export const getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await Blog.find().populate("author", "name").sort({ createdAt: -1 });
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch a blog post by slug
export const getBlogBySlug = async (req, res) => {
  const { slug } = req.params;

  try {
    const blogPost = await Blog.findOne({ slug }).populate("author", "name");

    if (!blogPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    blogPost.views += 1;
    await blogPost.save();

    res.status(200).json(blogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Edit a blog post
export const editBlogPost = async (req, res) => {
  const { slug } = req.params;
  const { imageSrc, readTime, title, description, category } = req.body;

  try {
    const blogPost = await Blog.findOneAndUpdate(
      { slug },
      { imageSrc, readTime, title, description, category },
      { new: true }
    );

    if (!blogPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(blogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a blog post
export const deleteBlogPost = async (req, res) => {
  const { slug } = req.params;

  try {
    const blogPost = await Blog.findOneAndDelete({ slug });

    if (!blogPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a comment to a blog post
export const addComment = async (req, res) => {
  const { slug } = req.params;
  const { text } = req.body;

  try {
    const blogPost = await Blog.findOne({ slug });

    if (!blogPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    blogPost.comments.push({ user: req.user.id, text });
    await blogPost.save();

    res.status(201).json(blogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
