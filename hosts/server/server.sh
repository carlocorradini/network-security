#!/bin/bash

while getopts ":p:" opt; do
    case $opt in
    p)
        readonly OPT_PORT="${OPTARG}"
        ;;
    \?)
        echo "Invalid option -$OPTARG" >&2
        exit 1
        ;;
    esac
done

#
# VARs
#
readonly PORT="${OPT_PORT:-8888}"

echo "Starting server on port ${PORT}"

# Server lifecycle
while true; do
    date | sudo nc -l -p ${PORT}
    sleep 0.5
done
