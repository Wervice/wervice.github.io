echo #                               Whitespace Installer for Linux                              #
echo THE INSTALLER NEEDS GIT AND PYTHON3
echo The installer removes old version
rm -r wervice.github.io
echo *The installer is cloning Whitespace
git clone https://github.com/Wervice/Whitespace
echo The installer removes the un-used files
cat version.txt
echo The installer downloads the start file
curl https://wervice.github.io/d/w/install/linux/start.sh
chmod +x start.sh
sh start.sh