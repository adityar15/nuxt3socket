import io from 'socket.io-client';

export default defineNuxtPlugin(() => {
    const socket = io('https://nuxt3socket-production.up.railway.app:10001', {
        transports: ['websocket'],
    });

    return {
        provide: {
            io: socket
        }
    }
});
