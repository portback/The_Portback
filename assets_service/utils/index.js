const amqplib = require("amqplib");
const { EXCHANGE_NAME, MESSAGE_BROKER_URL, QUEUE_NAME } = require("../config");

module.exports.HandleError = require("./error-handler");

module.exports.CustomError = require("./app-errors");

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

module.exports.SubcribeMessage = async (channel, service, binding_key) => {
  const appQueue = await channel.assertQueue(QUEUE_NAME);

  channel.bindQueue(appQueue.queue, EXCHANGE_NAME, binding_key);

  channel.consume(appQueue.queue, (data) => {
    console.log("receieved data");
    console.log(data.content.toString());
    channel.ack(data);
  });
};
