# Download ubuntu image
FROM dorowu/ubuntu-desktop-lxde-vnc:focal-lxqt

# Disable Prompt During Packages Installation
ARG DEBIAN_FRONTEND=noninteractive

#
# Install tools
#
RUN apt-get update
RUN apt-get -y install \
        iputils-ping \
        net-tools \
        iproute2 \
        arping
RUN apt-get clean