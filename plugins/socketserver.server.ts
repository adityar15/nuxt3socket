import { Server } from "socket.io"
declare global {
  var io: Server
}

let io : Server

export default defineNuxtPlugin(async (nitroApp) => {

  if(!io)
  {
    io = new Server(3001, { cors: { origin: "*" } })
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
    })
   
    globalThis.io = io
  }

})
