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

#
# Telnet
#
# Copy telnet config file
COPY hosts/server/telnet /etc/xinetd.d/telnet
# Copy telnet systemd service file
#COPY hosts/server/telnet.service /etc/systemd/system/telnet.service
# Enable telnet service when startup
#RUN systemctl enable telnet
RUN /etc/init.d/xinetd start

# Install server script
RUN printf "\nalias server=\"while true; do date | sudo nc -l -p 8888; sleep 0.5; done\"\n" >> ~/.bashrc