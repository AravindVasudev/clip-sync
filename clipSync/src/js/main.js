import '../scss/main.scss';
import Server from 'socket.io-client';

const socket = Server();
const clipboard = document.querySelector('#clip');

socket.on('message', (clip) => {
  clipboard.innerText = clip;
});
