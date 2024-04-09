const speakeasy = require("speakeasy");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Email, Email_key } = require("../config");
const amqplib = require("amqplib");

module.exports.SerializePassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(8);

    const serializedpassword = await bcrypt.hash(password, salt);

    return serializedpassword;
  } catch (error) {
    console.log(error);
  }
};

module.exports.testPassword = async (password, hashedPassword) => {
  const isPassword = bcrypt.compareSync(password, hashedPassword);
  return isPassword;
};

module.exports.GenerateToken = (key, payload) => {
  try {
    return jwt.sign(payload, key);
  } catch (error) {
    return error;
  }
};

module.exports.ValidateToken = (req) => {
  const token = req.header("x-auth-token");
  try {
    const isValid = jwt.verify(token, "password");
    req.user = isValid;
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports.HandleError = require("./error-handler");

module.exports.CustomeError = require("./app-errors");

module.exports.transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: Email,
    pass: Email_key,
  },
});

module.exports.sendMail = async (email, subject, message) => {
  try {
    await this.transporter.sendMail({
      from: Email,
      to: email,
      subject,
      text: message,
    });
  } catch (error) {
    return { error: error.message };
  }
};

module.exports.generateOTPSecret = () => {
  return {
    secret: speakeasy.generateSecret({ length: 6, name: "PortBack" }),
    expires: new Date(Date.now() + 5 * 60 * 1000),
  };
};

// Generate a six-digit OTP
module.exports.generateOTP = (otpSecret) => {
  return speakeasy.totp({
    secret: otpSecret.base32,
    encoding: "base32",
  });
};

module.exports.verifyOtp = (otp, other) => {
  return speakeasy.totp.verify({
    secret: otp,
    encoding: "base32",
    token: other,
    window: 6,
  });
};

/* ================== message broker ================= */

// create a channel
module.exports.CreateChannel = async () => {
  try {
    const connection = await amqplib.connect(Message_Broker_Uri);
    const channel = await connection.createChannel();
    await channel.assertExchange(EXCHANGE_NAME, "direct", false);
  } catch (error) {
    throw error;
  }
};

// publish message

module.exports.PublishMessage = async (channel, binding_key, message) => {
  try {
    await channel.publish(EXCHANGE_NAME, binding_key, Buffer.from(message));
  } catch (error) {
    throw err;
  }
};

// subscribe message

module.exports.SuscribeMessage = async (channel, service, binding_key) => {
  const appQueue = await channel.assertQueue(QUEUE_NAME);

  channel.bindQueue(appQueue.queue, EXCHANGE_NAME, binding_key);

  channel.consume(appQueue.queue, (data) => {
    console.log("receieved data");
    console.log(data.content.toString());
    channel.ack(data);
  });
};
