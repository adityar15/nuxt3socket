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

export default defineEventHandler((event) => {
  const { appUrl } = useRuntimeConfig()

  if (!global.wss) {
    wss = new WebSocketServer({ server: event.node.res.socket?.server })
    wss.on("connection", function (socket) {
      // sockets = [...sockets, socket]
      // global.sockets = sockets

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
