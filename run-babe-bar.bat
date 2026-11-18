@echo off
title The Damian Label
echo ========================================================
echo  Building and Launching The Damian Label...
echo ========================================================
cd /d "%~dp0"
if exist "C:\Program Files\Adobe\Adobe Photoshop 2025\node.exe" (
    "C:\Program Files\Adobe\Adobe Photoshop 2025\node.exe" build.cjs
) else (
    node build.cjs 2>nul
)
start "" "%~dp0index.html"
exit