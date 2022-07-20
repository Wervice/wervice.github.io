echo #                               Whitespace Installer for Linux                              #
echo THE INSTALLER NEEDS GIT AND PYTHON3
echo The installer removes old version
rm -r wervice.github.io
echo *The installer is cloning Whitespace
git clone https://github.com/Wervice/Whitespace
echo The installer removes the un-used files
cat version.txt
echo The installer downloads the start file
curl https://wervice.github.io/d/w/install/linux/remove.sh -O remove.sh
cd Whitespace
echo Starting server
echo Please open http://0.0.0.0:8000/
python -m http.server 8000