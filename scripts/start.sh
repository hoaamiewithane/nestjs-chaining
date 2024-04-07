#!/bin/bash

if [ "$1" == "gateway" ]; then
    # Start API Gateway
    echo "Starting API Gateway..."
    cd api-gateway
    pnpm dev &
    cd ..
    echo "API Gateway started successfully!"
elif [ "$1" == "user" ]; then
    # Start User Service
    echo "Starting User Service..."
    cd user-service
    pnpm dev &
    cd ..
    echo "User Service started successfully!"
else
    # Start both projects
    # Start API Gateway
    echo "Starting API Gateway..."
    cd api-gateway
    pnpm dev &
    cd ..

    # Start User Service
    echo "Starting User Service..."
    cd user-service
    pnpm dev &
    cd ..

    echo "All services started successfully!"
fi
