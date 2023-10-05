const mongoose = require("mongoose");

// Define the CourseContent schema
const courseContentSchema = new mongoose.Schema({
  sections: [
    {
      sectionId: {
        type: String,
        required: true,
      },
    },
  ],
});

// Create the CourseContent model
const CourseContent = mongoose.model("CourseContent", courseContentSchema);

module.exports = CourseContent;
