const Testimonials = require("../models/Testimonials");
const { CustomError } = require("../../utils");

class TestimonialRepository {
  async createTestimonial(testimonier, testimony, testimonierImage, userId) {
    try {
      const newTestimony = await Testimonials.create({
        testimonier,
        testimonierImage,
        testimony,
      });

      return newTestimony;
    } catch (error) {
      throw new CustomError("Error creating Testimony", 500);
    }
  }

  async findTestimonial(userId) {
    try {
      const testimonies = await Testimonials.find({
        userId,
      })
        .skip()
        .limit(5);
      return testimonies;
    } catch (error) {
      throw new CustomError("failed to fetch ", 500);
    }
  }

  async EditUsersTestimonails(userId ,_id , payload) {
    try {
      const testimonies = await Testimonials.findOneAndUpdate({
        userId,
        _id
      },payload)
        
      return testimonies;
    } catch (error) {
      throw new CustomError("failed to fetch ", 500);
    }
  }
}
