
export default defineNuxtPlugin(() => {
    const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    let socket = new WebSocket(`${wsProtocol}//nuxt3socket.onrender.com:10000`);

    return {
        provide: {
            ws: socket
        }
    }
});
