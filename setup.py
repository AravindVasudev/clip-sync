from setuptools import setup

install_requires = [
    'eventlet',
    'Flask',
    'Flask-SocketIO',
    'gunicorn'
]

setup(
    name='clipSync',
    version='0.1.0',
    description='A simple app that serves system\'s clipboard within local server.',
    author='AravindVasudev',
    packages=['clipSync'],
    install_requires=install_requires,
)
