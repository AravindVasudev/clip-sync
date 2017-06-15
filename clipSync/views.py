from flask import render_template
from . import app, win

@app.route('/')
def index():
    return render_template('index.html', clipboard=win.clipboard_get())
