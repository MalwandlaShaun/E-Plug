const mongoose = require("mongoose");

// Define the Course schema
const coursesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  courseContentID: {
    type: String,
    required: true,
  },
  facilitatorID: {
    type: String,
    required: true,
  },
});

// Create the Course model
const Courses = mongoose.model("Courses", coursesSchema);

module.exports = Courses;
