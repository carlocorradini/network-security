#!/bin/bash

#
# VARS
#
readonly PROJECT_NAME=network_security_lab_01

# Build & Start hosts
docker-compose --project-name $PROJECT_NAME up \
    --force-recreate \
    --build \
    --detach
