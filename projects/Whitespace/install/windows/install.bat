@echo off
echo ========================================================================================================
echo #                                        Whitespace Installer for Windows                              #
echo ========================================================================================================
echo THE INSTALLER NEEDS GIT AND PYTHON3
echo The installer removes old version
rmdir /s /Q wervice.github.io
echo *The installer is cloning Wervice
git clone https://github.com/Wervice/wervice.github.io
echo The installer removes the un-used files
cd wervice.github.io
del index.html
del .gitattributes
del .gitignore
del 404.md
del .htaccess
del hero.png
del sitema.pxml
del page_blocked.html
rmdir /s /Q d
rmdir /s /Q docs
rmdir /s /Q error
rmdir /s /Q pages
rmdir /s /Q images
rmdir /s /Q Templates
cd projects
cd Whitespace
type version.txt
cd ..
cd ..
cd ..
echo The installer starts Wervice's host. You can open it on http://127.0.0.1:8000/wervice.github.io/projects/Whitespace
start http://127.0.0.1:8000/wervice.github.io/projects/Whitespace
python -m http.server 8000