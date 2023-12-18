@echo off
setlocal

set "script_directory=%CD%"

set "apiGatewayFolder=%script_directory%\..\api-gateway"
set "chatFolder=%script_directory%\..\chat"
set "userFolder=%script_directory%\..\user"
set "eurekaFolder=%script_directory%\..\eureka-server"

cd "%apiGatewayFolder%" && mvn clean package -DskipTests
cd "%chatFolder%" && mvn clean package -DskipTests
cd "%userFolder%" && mvn clean package -DskipTests
cd "%eurekaFolder%" && mvn clean package -DskipTests
cd "%script_directory%" && docker-compose -p chat-online up -d --build

endlocal
