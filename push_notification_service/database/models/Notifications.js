const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});
