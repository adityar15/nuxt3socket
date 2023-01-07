import io from 'socket.io-client';

export default defineNuxtPlugin(() => {
    const socket = io('https://weedgreen-asjrkk.stormkit.dev:10001', {
        transports: ['websocket'],
    });

    return {
        provide: {
            io: socket
        }
    }
});
