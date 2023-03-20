import WebSocket, { WebSocketServer } from "ws"

type Client = {
  id: string
  send: (message: string) => void
  readyState: number
}

declare global {
  var wss: WebSocketServer
  var clients: Client[]
}

let wss: WebSocketServer
let clients: Client[] = []

let port = 8080

export default defineEventHandler((event) => {

  if (!global.wss) {
    // @ts-ignore
    wss = new WebSocketServer({ port: port, host: event.node.res.socket?.server.address().address })


    wss.on("connection", function (socket) {

      socket.send("connected")

      socket.on("message", function (message) {
        wss.clients.forEach(function (client) {
          if (client == socket && client.readyState === WebSocket.OPEN) {
            clients.push({
              id: message.toString(),
              send: (data: string) => client.send(data),
              readyState: client.readyState,
            })
            global.clients = clients
          }
        })
      })
      global.wss = wss
    })
  }
})
