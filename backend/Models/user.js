const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Surname: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  Role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
    required: true,
  },
  facebook: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
});

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
