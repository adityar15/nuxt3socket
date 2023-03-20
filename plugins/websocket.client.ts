export default defineNuxtPlugin(() => {
  if (process.server) return

  const wsProtocol = window.location.protocol === "https:" ? "wss:" : "ws:"
  const domain = window.location.hostname
  const websocketPort = 8080

  let socket = new WebSocket(`${wsProtocol}//${domain}:${websocketPort}`)

  return {
    provide: {
      socket,
    },
  }
})
