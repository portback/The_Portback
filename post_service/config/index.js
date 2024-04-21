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
  EXCHANGE_NAME: "portback_service",
  MESSAGE_BROKER_URL: process.env.MESSAGE_BROKER_URL,
  USER_BINDING_KEY: "USER_SERVICE",
  ASSETS_BINDING_KEY: "ASSETS_SERVICE",
  POST_BINDING_KEY: "POST_SERVICE",
  QUEUE_NAME: "POST_QUEUE",
  POST_RPC_QUEUE: "POST_RPC",
  ASSETS_RPC_QUEUE: "ASSETS_RPC",
};
