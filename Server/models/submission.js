const mongoose = require("mongoose");

// Define the Submissions schema
const submissionSchema = new mongoose.Schema({
  githubLink: {
    type: String,
    required: true,
  },
  domainLink: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  facilitatorId: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  topicId: {
    type: String,
    required: true,
  },
  AssessorId: {
    type: String,
  },
  AssessmentDecision: {
    type: String,
  },
  AssessmentComment: {
    type: String,
  },
});

// Create the Submissions model
const Submission = mongoose.model("Submission", submissionSchema);

module.exports = Submission;
