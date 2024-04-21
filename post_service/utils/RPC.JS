const amqplib = require("amqplib");

const { v4: uuidv4 } = require("uuid");
const { POST_RPC_QUEUE } = require("../config");

const RPCObserver = async (channel) => {
  await channel.assertQueue(POST_RPC_QUEUE, {
    durable: false,
  });

  await channel.prefetch(1);

  await channel.consume(
    POST_RPC_QUEUE,
    async (message) => {
      if (message.content) {
        const payload = JSON.parse(message.content.toString());
        console.log(payload);
        const response = { response: "i saw ur yeye message" };

        await channel.sendToQueue(
          message.properties.replyTo,
          Buffer.from(JSON.stringify(response), {
            correlationId: message.properties.correlationId,
          })
        );

        channel.ack(message);
      }
    },
    {
      noAck: false,
    }
  );
};

async function RPCRequest(RPC_QUEUE_NAME, channel, payload) {
  const id = uuidv4();
  console.log(id);

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
