from flask import render_template
from tkinter import Tk
from . import app

win = Tk()
win.withdraw()

@app.route('/')
def index():
    return render_template('index.html', clipboard=win.clipboard_get())
