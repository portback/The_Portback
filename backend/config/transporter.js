const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

const sendMail = async (email, subject, message) => {
  try {
    await transporter.sendMail({
      from: "portbackdevs@gmail.com",
      to: email,
      subject,
      text: message,
    });
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { sendMail };
