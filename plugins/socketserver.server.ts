import { Server } from "socket.io"
import http from "http"

declare global {
  var io: Server
}

let io : Server

export default defineNuxtPlugin(async (nitroApp) => {

  const server = http.createServer(nitroApp)

  const port = 10000

  
  if(!io)
  {
    io = new Server({cors: {origin: "*"}})
    
    io.attach(server)


    io.on("connection", (socket) => {
      
      socket.on("connect", (socket) =>{
        console.log("connected", socket.id)
      })
      
      socket.on("disconnect", () => {
        console.log("disconnected", socket.id)
      })
  
      socket.on("message", (data) => {
        socket.emit("message", `Hello from server ${data}`)
      })

      socket.on("connect_error", (err)=>{
        console.log("connect_error", err)
      })
    })

    io.on("close", ()=>{
      console.log("closed...")
    })
    

    globalThis.io = io
    if(io)
    {
      server.listen(port)
      console.log(`Socket ready at port ${port}`)
    }
  }

})
