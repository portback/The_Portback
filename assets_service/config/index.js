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
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
  CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET,
  CLOUDINARY_APIKEY: process.env.CLOUDINARY_APIKEY,
  EXCHANGE_NAME: "portback_service",
  MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
  USER_BINDING_KEY: "USER_SERVICE",
  POST_BINDING_KEY: "POST_SERVICE",
  ASSET_BINDING_KEY: "ASSETS_SERVICE",
  QUEUE_NAME: "ASSET_QUEUE",
};
