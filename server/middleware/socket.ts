import WebSocket, { WebSocketServer } from "ws"

declare global {
  var ws: WebSocketServer
}

let ws: WebSocketServer

export default defineEventHandler(({ node }) => {
  console.log("in socket module")
  if (!global.ws) {
    ws = new WebSocketServer({ server: node.res.socket?.server })
    ws.on("connection", function (socket) {
      socket.on("message", function (data, isBinary) {
        const dataString = data.toString()
        console.log("Message received", dataString)

        ws.clients.forEach(function (client) {
          if (client.readyState === WebSocket.OPEN) {
            client.send(data, {
              binary: isBinary,
            })
          }
        })
      })
    })
    global.ws = ws
  }
})
