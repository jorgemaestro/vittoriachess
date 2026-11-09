@echo off
title Vittoria Chess - web local
rem Arranca la web en local y la abre en el navegador. Para apagarla, cerrar esta ventana.
cd /d "%~dp0"
echo.
echo  VITTORIA CHESS - web local
echo  Arrancando en http://localhost:4321 ...
echo  Se abrira sola en el navegador. Para apagarla, cierra esta ventana.
echo.
start "" powershell -NoProfile -WindowStyle Hidden -Command "for ($i = 0; $i -lt 90; $i++) { try { Invoke-WebRequest http://localhost:4321 -UseBasicParsing -TimeoutSec 2 | Out-Null; Start-Process http://localhost:4321; break } catch { Start-Sleep 1 } }"
npm run dev
pause
