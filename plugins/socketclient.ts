import io from 'socket.io-client';

export default defineNuxtPlugin(() => {
    const socket = io('https://nuxt3socket.onrender.com:3001',);

    return {
        provide: {
            io: socket
        }
    }
});
