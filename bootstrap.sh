#!/bin/bash

#
# VARS
#
readonly HOST_IMAGE_NAME=ns_common_host_image
readonly DOCKER_COMPOSE="docker-compose \
    -f docker-compose.yml \
    -f common/docker-compose.yml \
    -f hosts/attacker/docker-compose.yml \
    -f hosts/client/docker-compose.yml \
    -f hosts/server/docker-compose.yml "

# Build common host image
docker build -t $HOST_IMAGE_NAME common

# Build hosts
eval "$DOCKER_COMPOSE build --build-arg host_image=$HOST_IMAGE_NAME"

# Start hosts
eval "$DOCKER_COMPOSE up -d"