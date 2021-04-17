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
        ncat
RUN apt-get clean

# Install server script
RUN printf "\nalias server=\"while true; do date | sudo nc -l -p 8888; sleep 0.5; done\"\n" >> ~/.bashrc