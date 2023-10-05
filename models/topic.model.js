const mongoose = require("mongoose");

// Define the Topic schema
const topicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  lesson: {
    videoLink: String,
    transcript: String,
  },
  quiz: [
    {
      question: String,
      a: String,
      b: String,
      c: String,
      d: String,
      answer: String,
    },
  ],
  project: {
    PDF_URL: String,
    checklist: [String],
  },
});

// Create the Topic model
const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
