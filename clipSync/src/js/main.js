import '../scss/main.scss';
import Server from 'socket.io-client';

const socket = Server();
const container = document.querySelector('.container');

socket.on('message', (clip) => {
  container.innerText = clip;
});
