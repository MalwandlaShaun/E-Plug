const mongoose = require("mongoose");

// Define the Chat schema
const chatSchema = new mongoose.Schema({
  messages: [
    {
      messageId: {
        type: String,
        required: true,
      },
    },
  ],
});

// Create the Chat model
const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
