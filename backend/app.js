const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path')

const User = require("./models/user");
const connectDB = require("./config/db");
const userRouer = require("./router/user");
const postRouer = require("./router/post");

const app = express();

app.use("/uploads", express.static(path.join("uploads")));

app.use(bodyParser.json());
app.use(cors());

dotenv.config();
connectDB();

app.use(userRouer);
app.use(postRouer);



app.listen(5000);
