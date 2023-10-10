const mongoose = require("mongoose");

// Define the Message schema
const messageSchema = new mongoose.Schema({
  dateTime: {
    type: Date,
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
  recipient: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  chatId: {
    type: String,
    required: true,
  },
});

// Create the Message model
const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
