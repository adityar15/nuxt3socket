import io from 'socket.io-client';

export default defineNuxtPlugin(() => {
    const socket = io('http://localhost:3001');

    return {
        provide: {
            io: socket
        }
    }
});
