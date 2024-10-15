import socketIO from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:4000';
const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:33340';

export const socket = socketIO(URL, {
    autoConnect: true
});