import threading
import time
import os
import ntpath
from shutil import copyfile
from . import win
from . import socketio

def clipboardCheck():
    cb = win.clipboard_get()
    while(True):
        time.sleep(1)
        if cb != win.clipboard_get():
            cb = win.clipboard_get()
            if os.path.exists(cb):
                _, file_ext = os.path.splitext(cb)
                if file_ext in ['.png', '.jpg', '.jpeg']:
                    location = 'static/temp/{}'.format(ntpath.basename(cb))
                    copyfile(cb, './clipSync/{}'.format(location))
                    socketio.emit('image', location)
                else:
                    socketio.emit('message', cb)
            else:
                socketio.emit('message', cb)

thread = threading.Thread(target=clipboardCheck)
thread.start()
