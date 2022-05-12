// models
const Blog = require("../models/blog");
const User = require("../models/user");

// creating blog
exports.createBlog = async (req, res) => {
  const { title, image, content, category, hashtags, view } = req.body;
  try {
    const createdBlog = await Blog.create({
      title,
      imageUrl: image,
      content,
      category,
      hashtags,
      view,
      creator: req.user._id,
    });
    await User.updateOne(
      {
        _id: req.user._id, // a valid 'box' ObjectId
      },
      {
        $push: { blogs: createdBlog },
      }
    );
  } catch (error) {
    console.log(error);
    return res.json({ message: "Something happend wrong." });
  }
  return res.json({ message: "create blog." });
};

// geting all blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    return res.json({ message: "All blogs have been got.", blogs });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Something happend wrong." });
  }
};

// geting specific user blogs
exports.getMyBlogs = async (req, res) => {
  const { filter } = req.query;
  try {
    const blogs = await Blog.find({ creator: req.user._id });
    return res.json({ message: "My blogs have been got.", blogs, user : req.user });
  } catch (error) {
    return res.json({ error: "Something happend wrong." });
  }
};
