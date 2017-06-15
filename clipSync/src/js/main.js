import '../scss/main.scss';
import Server from 'socket.io-client';

const socket = Server(); // Socket Init
const clipboard = document.querySelector('#clip'); // clipboard

// On text content
socket.on('message', (clip) => {
  clipboard.innerText = clip;
});

// On image content
socket.on('image', (clip) => {
  clipboard.innerHTML = `<img src=${clip} height=auto width=100% />`;
});
