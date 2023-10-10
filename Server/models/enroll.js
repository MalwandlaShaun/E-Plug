const mongoose = require("mongoose");

// Define the Enrolled schema
const enrolledSchema = new mongoose.Schema({
  courseID: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
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
