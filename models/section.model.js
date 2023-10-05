const mongoose = require("mongoose");

// Define the Section schema
const sectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  topics: [
    {
      topicId: {
        type: String,
        required: true,
      },
    },
  ],
});

// Create the Section model
const Section = mongoose.model("Section", sectionSchema);

module.exports = Section;
