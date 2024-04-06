const mongoose = require("mongoose");

const ExperienceSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  description: {
    type: [String], // Array of strings for bullet points
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        return this.startDate < value;
      },
      message: "End date must be after start date",
    },
  },
  location: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});



const Experience = mongoose.model("Experience", ExperienceSchema);

module.exports = Experience;
