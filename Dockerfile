# Download base image ubuntu
FROM ubuntu

# Disable Prompt During Packages Installation
ARG DEBIAN_FRONTEND=noninteractive

# Update Ubuntu Software repository
RUN apt update

# Install tools to test the reachability of network hosts
RUN apt-get install -y iputils-ping