import {WebSocketServer} from 'ws'
import { defineNuxtModule } from "@nuxt/kit"

declare global {
    var io: WebSocketServer
} 

let io : WebSocketServer

export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook("listen", (server) => {
      console.log("Socket listen", server.address(), server.eventNames())
      io = new WebSocketServer({ server })

      nuxt.hook("close", () => io.close())

      io.on("connection", (socket) => {

        socket.on("message", (data) => {
            
            io.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(data)
                }
            })
            
        })
      })
      globalThis.io = io
    })
  },
})
