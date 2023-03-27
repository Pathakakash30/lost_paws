const express = require("express");
const app = express();

const Post = require("../models/post");

app.get("/postsfeed", async (req, res, next) => {
  console.log("/postfeed");
  let posts;
  try {
    posts = await Post.find();
  } catch (error) {
    return res.json({ message: error.message, status: false });
  }

  res.json({ posts: posts, status: true });
});

app.post("/addpost", async (req, res, next) => {
  console.log(req.body);
  const { title, address, description, image, user } = req.body;
  let post;
  try {
    post = new Post({
      image,
      title,
      description,
      address,
      user,
    });
    await post.save();
  } catch (error) {
    return res.json({ message: error.message, status: false });
  }

  res.json({ post: post, status: true });
});

module.exports = app;
