const mongoose = require("mongoose");

const testimonialSchema = mongoose.Schema(
  {
    testmonier: {
      type: String,
      required: true,
    },
    testimony: {
      type: String,
      required: true,
    },
    testimonierImage: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, _ret) {
        delete _ret.__v;
      },
    },
  }
);

module.exports = mongoose.model("Testimonial", testimonialSchema);
