import io from 'socket.io-client';

export default defineNuxtPlugin(() => {
    const socket = io('https://dreamy-taiyaki-856c76.netlify.app:3001');

    return {
        provide: {
            io: socket
        }
    }
});
