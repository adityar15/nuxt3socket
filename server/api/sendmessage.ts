import WebSocket from 'ws';

export default defineEventHandler(async (event) => {
    const { message, sender } = await readBody(event)

   
    globalThis.clients.forEach(function (client, isBinary) {    

        if (client.id !== sender && client.readyState === WebSocket.OPEN) {
            // console.log("Client", client)
            client.send(message)
        }
    })

    return {
        statusCode: 200,
        body: "This is done",
    }
})