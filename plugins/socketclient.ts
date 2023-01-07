import io from 'socket.io-client';

export default defineNuxtPlugin(() => {
    const socket = io('https://nuxt3socket.onrender.com:10000',);

    return {
        provide: {
            io: socket
        }
    }
});
