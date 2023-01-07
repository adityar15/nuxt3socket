import io from 'socket.io-client';

export default defineNuxtPlugin(() => {
    const socket = io('https://nuxt3socket.onrender.com:10001', {
        transports: ['websocket'],
    });

    return {
        provide: {
            io: socket
        }
    }
});
