import io from 'socket.io-client';

export default defineNuxtPlugin(() => {
    const socket = io('https://63b98bffcc26af2b65da6448--dreamy-taiyaki-856c76.netlify.app:3001');

    return {
        provide: {
            io: socket
        }
    }
});
