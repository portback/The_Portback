const amqplib = require("amqplib");
const { EXCHANGE_NAME, MESSAGE_BROKER_URL, QUEUE_NAME, POST_BINDING_KEY } = require("../config");

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

module.exports.CustomError = require("./app-errors");

// ================================ message broker =====================

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

// pulbish message

module.exports.PublishMessage = async (channel, binding_key, message) => {
  try {
    await channel.publish(EXCHANGE_NAME, binding_key, Buffer.from(message));
  } catch (error) {
    throw error;
  }
};

//subscribe message

module.exports.SubscribeMessage = async (channel, service) => {
  const appQueue = await channel.assertQueue(QUEUE_NAME);

  channel.bindQueue(appQueue.queue, EXCHANGE_NAME, POST_BINDING_KEY);

  channel.consue(appQueue.queue, (data) => {  
    console.log("recieved data");

    channel.ack(data);
  });
};
