# syntax = edrevo/dockerfile-plus

#
# ARGs
#
ARG BACKGROUND_IMAGE=hosts/client/background.png

INCLUDE+ shared/Dockerfile

#
# Install tools
#
RUN apt-get -y install \
        telnet

# Copy basic .vimrc
COPY shared/.vimrc /root/.vimrc
