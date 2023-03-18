const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const User = require("./models/user");
const connectDB = require("./config/db");
const app = express();

app.use(bodyParser.json());
app.use(cors());

dotenv.config();
connectDB();

app.post("/login", async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      if (password === user.password) {
        res.status(201);
        res.json({ status: true, user: user });
      } else {
        res.status(401);
        res.json({ message: "password doesnt match", status: false });
      }
    } else {
      res.status(401);
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

app.listen(5000);
