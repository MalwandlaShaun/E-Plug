const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  CreateID: {
    type: String,
    required: true,
  },
  MembersID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming 'User' is the name of your User model
    },
  ],
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
