const mongoose = require("mongoose");

// Define the Enrolled schema
const enrolledSchema = new mongoose.Schema({
  CourseID: {
    type: String,
    required: true,
  },
  UserID: {
    type: String,
    required: true,
  },
  StartDate: {
    type: Date,
    required: true,
  },
  EndDate: {
    type: Date,
    required: true,
  },
  progress: {
    type: Number,
    required: true,
  },
});

// Create the Enrolled model
const Enrolled = mongoose.model("Enrolled", enrolledSchema);

module.exports = Enrolled;
