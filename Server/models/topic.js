const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  lesson: [
    {
      title: {
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
      quiz: [
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
      project: {
        pdf_url: {
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
