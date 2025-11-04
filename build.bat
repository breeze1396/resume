@echo off
setlocal

echo [+] Starting simple build...

REM 创建输出目录
if not exist "js" mkdir "js"
if not exist "css" mkdir "css"

REM ========== 压缩 src/js/ 下所有 .js 文件（只处理一层，或递归处理）==========
echo [+] Compressing JS files...
for /r "src\js" %%f in (*.js) do (
    
    echo   ^> %%f --^> js\%%~nxf
    call terser "%%f" -o "js\%%~nxf" --compress drop_console=true,passes=3 --mangle toplevel=true --toplevel
    if errorlevel 1 exit /b 1
)

echo [+] Compressing locales JS files...
if not exist "locales" mkdir "locales"
for /r "src\locales" %%f in (*.js) do (
    echo   ^> %%f --^> locales\%%~nxf
    call terser "%%f" -o "locales\%%~nxf" --compress drop_console=true,passes=3 --mangle toplevel=true --toplevel
    if errorlevel 1 exit /b 1
)

REM ========== 压缩 src/css/ 下所有 .css 文件 ==========
echo [+] Compressing CSS files...
for /r "src\css" %%f in (*.css) do (
    echo   ^> %%f --^> css\%%~nxf
    call cleancss -o "css\%%~nxf" "%%f"
    if errorlevel 1 exit /b 1
)

REM ========== 压缩 index.html ==========
if exist "src\index.html" (
    echo [+] Compressing index.html...
    echo   ^> src\index.html --^> index.html
    html-minifier-terser ^
        --collapse-whitespace ^
        --remove-comments ^
        --remove-attribute-quotes ^
        --remove-redundant-attributes ^
        --minify-css true ^
        --minify-js true ^
        -o "index.html" "src\index.html"
    if errorlevel 1 exit /b 1
)

REM ========== 复制 asset 和 pdf（覆盖）==========
echo [+] Copying asset...
robocopy "src\asset" "asset" /E /XD .git >nul

echo [+] Copying pdf...
robocopy "src\pdf" "pdf" /E >nul

echo [+] Build finished!