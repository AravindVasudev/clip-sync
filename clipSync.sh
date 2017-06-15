#!/bin/bash

case "$1" in
  "start")
    # Start the server
    gunicorn wsgi:app --worker-class eventlet -w 1 --bind 0.0.0.0:8000 --pid=app.pid --reload
    ;;
  "serve")
    # Open http://127.0.0.1:8000/ in default browser
    python -m webbrowser http://127.0.0.1:8000/

    # Start the server
    gunicorn wsgi:app --worker-class eventlet -w 1 --bind 0.0.0.0:8000 --pid=app.pid --reload
    ;;
  "clean")
    # Clean temp directory
    rm -rf ./clipSync/static/temp/*
    ;;
  *)
    printf "invalid / insufficient argument. \n \
          1. ./clipSync.sh start - start the server \n \
          2. ./clipSync.sh serve - start server & open browser \n \
          3. ./clipSync.sh clean - clears temp directory \n"
    ;;
esac
