# syntax = edrevo/dockerfile-plus

#
# ARGs
#
ARG BACKGROUND_IMAGE=hosts/server/background.png

INCLUDE+ shared/Dockerfile

#
# Install tools
#
RUN apt-get -y install \
        ncat \
        xinetd \
        telnetd

# Copy telnet config file
COPY hosts/server/telnet /etc/xinetd.d/telnet

# Copy banky executable
COPY  hosts/server/banky /usr/local/bin/banky
RUN chmod +x /usr/local/bin/banky
