const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  createID: {
    type: String,
    required: true,
  },
  membersID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming 'User' is the name of your User model
    },
  ],
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
