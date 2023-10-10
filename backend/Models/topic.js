const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Lesson: [
    {
      Title: {
        type: String,
        required: true,
      },
      videoLink: {
        type: String,
        required: true,
      },
      transcript: {
        type: String,
      },
      Quiz: [
        {
          question: {
            type: String,
            required: true,
          },
          a: {
            type: String,
            required: true,
          },
          b: {
            type: String,
            required: true,
          },
          c: {
            type: String,
            required: true,
          },
          d: {
            type: String,
            required: true,
          },
          answer: {
            type: String,
            required: true,
          },
        },
        {
          question: {
            type: String,
            required: true,
          },
          a: {
            type: String,
            required: true,
          },
          b: {
            type: String,
            required: true,
          },
          c: {
            type: String,
            required: true,
          },
          d: {
            type: String,
            required: true,
          },
          answer: {
            type: String,
            required: true,
          },
        },
      ],
      Project: {
        PDF_URL: {
          type: String,
        },
        checklist: [
          {
            type: String,
          },
        ],
      },
    },
  ],
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
