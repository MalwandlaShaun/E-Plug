const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    default: Date.now,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  recipientID: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
