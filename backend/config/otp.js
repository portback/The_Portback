const speakeasy = require("speakeasy");

// Generate a new OTP secret
const generateOTPSecret = () => {
  return speakeasy.generateSecret({ length: 6, name: "PortBack" });
};

// Generate a six-digit OTP
const generateOTP = (otpSecret) => {
  return speakeasy.totp({
    secret: otpSecret.base32,
    encoding: "base32",
  });
};

const verifyOtp = (otp, other) => {
  return speakeasy.totp.verify({
    secret: otp,
    encoding: "base32",
    token: other,
    window: 6,
  });
};

module.exports = { generateOTPSecret, generateOTP, verifyOtp };
