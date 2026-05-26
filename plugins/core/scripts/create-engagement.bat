@echo off
REM Omega Consulting Template - Create New Engagement (Windows)
REM Usage: create-engagement.bat "Engagement Name" "Client Name" "SERVICE_CODE"

setlocal enabledelayedexpansion

if "%~1"=="" (
    echo.
    echo ========================================
    echo Omega CONSULTING - NEW ENGAGEMENT SETUP
    echo ========================================
    echo.
    echo Usage: create-engagement.bat "Engagement Name" "Client Name" "SERVICE_CODE"
    echo.
    echo Service Codes:
    echo   DIG - Digital Transformation
    echo   AIG - AI Governance
    echo   AAI - Agentic AI
    echo   COE - Competency Center
    echo   ESI - Enterprise Integration
    echo   EDU - Education Solutions
    echo   HLT - Healthcare Solutions
    echo   GOV - Government Solutions
    echo   STR - Corporate Advisory
    echo   MAR - Maritime Solutions
    echo   ISO - ISO Certification
    echo.
    echo Example:
    echo   create-engagement.bat "Digital Assessment" "Acme Corp" "DIG"
    echo.
    exit /b 1
)

set ENGAGEMENT_NAME=%~1
set CLIENT_NAME=%~2
set SERVICE_LINE=%~3

if "%SERVICE_LINE%"=="" set SERVICE_LINE=DIG

echo.
echo ========================================
echo CREATING NEW ENGAGEMENT
echo ========================================
echo.
echo Engagement: %ENGAGEMENT_NAME%
echo Client:     %CLIENT_NAME%
echo Service:    %SERVICE_LINE%
echo.

REM Run Node.js setup script
node "%~dp0setup-new-engagement.js" "%ENGAGEMENT_NAME%" "%CLIENT_NAME%" "%SERVICE_LINE%"

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo SETUP COMPLETE
    echo ========================================
    echo.
    echo Next steps:
    echo 1. Open Claude Code: claude
    echo 2. Run: /project:session-start
    echo.
) else (
    echo.
    echo ERROR: Setup failed. Check Node.js is installed.
    echo.
)

pause
