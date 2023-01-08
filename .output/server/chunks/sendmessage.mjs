import { defineEventHandler, readBody } from 'h3';
import WebSocket from 'ws';

const sendmessage = defineEventHandler(async (event) => {
  const { message, sender } = await readBody(event);
  globalThis.clients.forEach(function(client, isBinary) {
    if (client.id !== sender && client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
  return {
    statusCode: 200,
    body: "This is done"
  };
});

export { sendmessage as default };
//# sourceMappingURL=sendmessage.mjs.map
