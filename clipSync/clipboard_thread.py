import threading
import time
from . import win
from . import socketio
from flask_socketio import send, emit

# @socketio.on('message')
def clipboardCheck():
    cb = win.clipboard_get()
    while(True):
        time.sleep(1)
        if cb != win.clipboard_get():
            cb = win.clipboard_get()
            socketio.emit('message', cb)

thread = threading.Thread(target=clipboardCheck)
thread.start()
