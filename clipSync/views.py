'''
This file holds all app routes.
'''

from flask import render_template
from . import app, win

# Index
@app.route('/')
def index():
    return render_template('index.html', clipboard=win.clipboard_get())
