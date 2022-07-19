@echo off
echo The installer is cloning Wervice
git clone https://github.com/Wervice/wervice.github.io
echo The installer removes the un-used files
del wervice.github.io/index.html
echo The installer starts Wervice's host. You can open it on http://127.0.0.1:8000/wervice.github.io/projects/Whitespace
start http://127.0.0.1:8000/wervice.github.io/projects/Whitespace
python -m http.server 8000