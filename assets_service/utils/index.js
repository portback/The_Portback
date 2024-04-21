const amqplib = require("amqplib");
const {
  EXCHANGE_NAME,
  MESSAGE_BROKER_URL,
  QUEUE_NAME,
  ASSET_BINDING_KEY,
} = require("../config");

module.exports.HandleError = require("./error-handler");

module.exports.CustomError = require("./app-errors");

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

/* ================== message broker ================= */

// create a channel
module.exports.CreateChannel = async () => {
  try {
    const connection = await amqplib.connect(MESSAGE_BROKER_URL);
    const channel = await connection.createChannel();
    await channel.assertExchange(EXCHANGE_NAME, "direct", false);
    console.log("connected");
    return channel;
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

module.exports.SubcribeMessage = async (channel, service) => {
  const appQueue = await channel.assertQueue(QUEUE_NAME);

  channel.bindQueue(appQueue.queue, EXCHANGE_NAME, ASSET_BINDING_KEY);

  channel.consume(appQueue.queue, (data) => {
    console.log("receieved data");
    console.log(data.content.toString());
    // service.SubcribeMessage(data);
    channel.ack(data);
  });
};
