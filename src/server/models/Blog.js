const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  preDesc: {
    type: String,
  },
  publishedDate: {
    type: String,
  },
  keyWord: {
    type: String,
  },
  description: {
    type: String,
  },
  authorName: {
    type: String,
  },
  designation: {
    type: String,
  },
  aboutme: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  gender: {
    type: String,
  },
});
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
