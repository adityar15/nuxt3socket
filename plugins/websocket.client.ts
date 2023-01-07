
export default defineNuxtPlugin(() => {
    let socket = new WebSocket('ws://nuxt3socket.onrender.com:10000');

    return {
        provide: {
            ws: socket
        }
    }
});
