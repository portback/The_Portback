const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  dotenv.config({ path: configFile });
} else {
  dotenv.config();
}

module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  Email: process.env.EMAIL,
  Email_key: process.env.EMAIL_PASS,
};
