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
        socket.on("connect", (socket) => {
          console.log("connected", socket.id)
        })


        socket.on("message", (data) => {
          socket.send(`Hello from server ${data}`)
        })

        socket.on("connect_error", (err) => {
          console.log("connect_error", err)
        })
      })
      globalThis.io = io
    })
  },
})
