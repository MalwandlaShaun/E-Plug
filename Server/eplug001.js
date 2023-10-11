//COPY AND PASTE = npm install nodemon dotenv express cors morgan mongoose https jsonwebtoken

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const https = require("https");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const ip = "10.255.66.152"; // change this to suit context
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

mongoose.connect("mongodb://127.0.0.1:27017/eplug");

//Routes for user authentication and authorization using JWT tokens

app.listen(8080, ip, function () {
  console.log(
    "server started...\nClick the url to gain access: http://10.255.66.152:8080/"
  );
});
