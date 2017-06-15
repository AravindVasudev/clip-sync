from . import socketio
from flask_socketio import send, emit


@socketio.on('message')
def handle_message(message):
    print('received message: ' + message)
