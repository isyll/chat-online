@echo off
setlocal

set "script_directory=%~dp0"

set "apiGatewayFolder=%script_directory%\..\api-gateway"
set "chatFolder=%script_directory%\..\chat"

cd "%apiGatewayFolder%" && mvn clean package -DskipTests
cd "%chatFolder%" && mvn clean package -DskipTests
cd "%script_directory%" && docker-compose -p chat-online up -d --build

endlocal
