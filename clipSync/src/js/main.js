import '../scss/main.scss';
import Server from 'socket.io-client';

const socket = Server();
const clipboard = document.querySelector('#clip');

socket.on('message', (clip) => {
  clipboard.innerText = clip;
});

socket.on('image', (clip) => {
  clipboard.innerHTML = `<img src=${clip} height=auto width=100% />`;
});
