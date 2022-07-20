echo #                               Whitespace Installer for Linux                              #
echo THE INSTALLER NEEDS GIT AND PYTHON3
echo The installer removes old version
rmdir /s /Q wervice.github.io
echo *The installer is cloning Whitespace
git clone https://github.com/Wervice/Whitespace
echo The installer removes the un-used files
type version.txt
echo The installer downloads the start file
curl https://wervice.github.io/d/w/install/linux/start.bat -O start.bat
curl https://wervice.github.io/d/w/install/linux/remove.bat -O remove.bat
echo Starting server
echo Please open http://127.0.0.1:8000/
python -m http.server 8000