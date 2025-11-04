@echo off
setlocal

REM 检查参数数量
if "%~2"=="" (
    echo Usage: compress_js.bat input.js output.js
    exit /b 1
)

set "INPUT=%~f1"
set "OUTPUT=%~f2"

REM 获取输出目录
for %%i in ("%OUTPUT%") do set "OUT_DIR=%%~dpi"

REM 创建输出目录（如果不存在）
if not exist "%OUT_DIR%" mkdir "%OUT_DIR%"

REM 调用 terser
terser "%INPUT%" -o "%OUTPUT%" --compress drop_console=true,passes=3 --mangle toplevel=true --toplevel

if errorlevel 1 (
    echo Error: Terser failed to compress the file.
    exit /b 1
)

echo Successfully compressed "%INPUT%" to "%OUTPUT%"