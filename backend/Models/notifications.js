const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  Type: {
    type: String,
    required: true,
  },
  DateTime: {
    type: Date,
    default: Date.now,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  RecipientID: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
