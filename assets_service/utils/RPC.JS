const amqplib = require("amqplib");

const { v4: uuid } = require("uuid");
const { ASSETS_RPC_QUEUE } = require("../config");

const RPCObserver = async (channel) => {
  try {
    await channel.assertQueue(ASSETS_RPC_QUEUE, {
      durable: false,
    });

    await channel.prefetch(1);

    await channel.consume(
      ASSETS_RPC_QUEUE,
      async (message) => {
        if (message.content) {
          const payload = JSON.parse(message.content.toString());

          const response = {}(await channel).sendToQueue(
            message.propeties.replyTo,
            Buffer.from(JSON.stringify(response)),
            {
              correlationId: message.properties.correlationId,
            }
          );

          channel.ack(message);
        }
      },
      {
        noAck: false,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

async function RPCRequest(RPC_QUEUE_NAME, channel, payload) {
  const id = uuid();
  const q = await channel.assertQueue("", {
    exclusive: true,
  });

  channel.sendToQueue(RPC_QUEUE_NAME, Buffer.from(payload), {
    replyTo: q.queue,
    correlationId: id,
  });

  return new Promise((resolve, reject) => {
    channel.consume(
      q.queue,
      (message) => {
        if (message.properties.correlationId === id) {
          resolve(JSON.parse(message.content.toString()));
        } else {
          reject("Data not found");
        }
      },
      {
        noAck: false,
      }
    );
  });
}

module.exports = {
  RPCObserver,
  RPCRequest,
};
