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
  *)
    printf "invalid / insufficient argument. \n \
          2. ./clipSync.sh start - start the server \n \
          3. ./clipSync.sh serve - start server & open browser \n"
    ;;
esac
