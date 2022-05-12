const mongoose = require("mongoose");
const User = require("./user");

const Blog = mongoose.model("Blog", {
  title: { type: String },
  imageUrl: { type: String },
  content: { type: String },
  category: { type: String },
  hashtags: { type: String },
  view: { type: String },
  creator: { type: mongoose.Types.ObjectId, ref: User },

});
module.exports = Blog;
