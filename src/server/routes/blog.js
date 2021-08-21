const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
router.post("/addBlog", (req, res) => {
  console.log(`req.body`, req.body);
  new Blog(req.body.BlogObj).save().then((prop) => res.json(prop));
});
router.get("/getAllBlogs", (req, res) => {
  Blog.find()
    .then((blogs) => res.json(blogs))
    .catch((err) =>
      res.status(404).json({ nopropsfound: "No properties found" })
    );
});
router.post("/getBlog", (req, res) => {
  Blog.find({ _id: req.body.id })
    .then((blogs) => res.json(blogs))
    .catch((err) =>
      res.status(404).json({ nopropsfound: "No properties found" })
    );
});
router.post("/editBlog", (req, res) => {
  Blog.findOneAndUpdate(
    { _id: req.body.id },
    { $set: req.body.BlogObj },
    { new: true }
  )
    .then((blogs) => res.json(blogs))
    .catch((err) =>
      res.status(404).json({ nopropsfound: "No properties found" })
    );
});

router.post("/deleteBlog", (req, res) => {
  Blog.findOneAndDelete({ _id: req.body.id })
    .then((blogs) => res.json(blogs))
    .catch((err) =>
      res.status(404).json({ nopropsfound: "No properties found" })
    );
});

module.exports = router;
