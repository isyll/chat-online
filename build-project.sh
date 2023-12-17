#!/bin/bash

script_directory=$(dirname "$0")

apiGatewayFolder="$script_directory/../api-gateway"
chatFolder="$script_directory/../chat"

cd "$apiGatewayFolder" && mvn clean package -DskipTests

cd "$chatFolder" && mvn clean package -DskipTests

cd "$script_directory" && docker-compose -p chat-online up -d --build
