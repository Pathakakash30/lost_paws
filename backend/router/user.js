const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      if (password === user.password) {
        let token;
        try {
          token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "4h",
          });
        } catch (err) {
          const error = new Error(err.messgae, 500);
          return next(error);
        }
        res.status(201);
        res.json({ status: true, name: user.name, token: token });
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

  var hash = bcrypt.hashSync(password, 10);

  try {
    user = new User({
      name,
      email,
      password: hash,
      image,
    });
    await user.save();
  } catch (error) {
    res.json({ message: error.message, status: false });
  }

  let token;
  try {
    token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "4h",
    });
  } catch (err) {
    const error = new Error(err.messgae, 500);
    return next(error);
  }

  res.json({ token: token, status: true, name: user.name });
});

module.exports = app;
