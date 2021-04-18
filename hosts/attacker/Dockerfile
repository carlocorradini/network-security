# syntax = edrevo/dockerfile-plus

#
# ARGs
#
ARG BACKGROUND_IMAGE=hosts/attacker/background.png

INCLUDE+ shared/Dockerfile

#
# Install tools
#
RUN apt-get -y install \
        ettercap-common

# Copy rshijack executable
COPY hosts/attacker/rshijack /usr/local/bin/rshijack
RUN chmod +x /usr/local/bin/rshijack
