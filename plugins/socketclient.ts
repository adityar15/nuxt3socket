import io from 'socket.io-client';

export default defineNuxtPlugin(() => {
    const socket = io('https://cool-snickerdoodle-547743.netlify.app:3001');

    return {
        provide: {
            io: socket
        }
    }
});
