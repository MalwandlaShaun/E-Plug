const mongoose = require("mongoose");

// Define the Appointments schema
const appointmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  people: [
    {
      type: String,
      required: true,
    },
  ],
  userId: {
    type: String,
    required: true,
  },
});

// Create the Appointments model
const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
