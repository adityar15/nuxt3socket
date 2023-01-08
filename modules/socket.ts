import WebSocket, {WebSocketServer} from 'ws'
import { defineNuxtModule } from "@nuxt/kit"

declare global {
    var io: WebSocketServer
} 

let io : WebSocketServer

export default defineNuxtModule({
  setup(options, nuxt) {
    console.log("in socket module")
    nuxt.hook("listen", (server) => {
      console.log("Socket listen", server.address(), server.eventNames())
      io = new WebSocketServer({ server })

      nuxt.hook("close", () => io.close())

      io.on("connection", function(socket){

        socket.on("message", function (data, isBinary) {
            
            const dataString = data.toString()
            console.log("Message received", dataString)
            
            io.clients.forEach(function(client){
                if (client.readyState === WebSocket.OPEN) {
                    client.send(data, {
                        binary: isBinary
                    })
                }
            })
            
        })
      })
      globalThis.io = io
    })
  },
})
