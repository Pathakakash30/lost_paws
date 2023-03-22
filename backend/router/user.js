const express = require("express");
const app = express();

const User = require("../models/user");

app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      if (password === user.password) {
        res.status(201);
        res.json({ status: true, user: user });
      } else {
        res.json({ message: "password doesnt match", status: false });
      }
    } else {
      res.json({
        message: "email password doesnt exist or match",
        status: false,
      });
    }
  } catch (error) {
    res.status(404);
    res.json({
      message: "error",
      error: error,
      status: false,
    });
  }
});

app.post("/signup", async (req, res, next) => {
  console.log(req.body);
  const { name, email, password, image } = req.body;
  let user;
  try {
    user = new User({
      name,
      email,
      password,
      image,
    });
    await user.save();
  } catch (error) {
    res.json({ message: error.message, status: false });
  }

  res.json({ user: user, status: true });
});

module.exports = app;
