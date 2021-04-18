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

# Copy server script
COPY hosts/server/server.sh /usr/local/bin/server_timestamp_service.sh
RUN chmod +x /usr/local/bin/server_timestamp_service.sh
RUN printf "\nalias server=\"server_timestamp_service.sh\"\n" >> ~/.bashrc
