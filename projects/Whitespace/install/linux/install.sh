echo #                                        Whitespace Installer for Linux                              #
echo THE INSTALLER NEEDS GIT AND PYTHON3
echo The installer removes old version
rm -r wervice.github.io
echo *The installer is cloning Wervice
git clone https://github.com/Wervice/wervice.github.io
echo The installer removes the un-used files
cd wervice.github.io
unlink index.html
unlink .gitattributes
unlink .gitignore
unlink 404.md
unlink .htaccess
unlink hero.png
unlink page_blocked.html
unlink sitemap.xml
rm -r d
rm -r docs
rm -r error
rm -r pages
rm -r images
rm -r Templates
cd projects
cd Whitespace
type version.txt
cd ..
cd ..
cd ..
echo The installer starts Wervice's host. You can open it on http://127.0.0.1:8000/wervice.github.io/projects/Whitespace
start http://127.0.0.1:8000/wervice.github.io/projects/Whitespace
python -m http.server 8000