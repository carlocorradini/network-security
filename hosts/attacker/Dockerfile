# syntax = edrevo/dockerfile-plus

#
# ARGs
#
ARG BACKGROUND_IMAGE=hosts/attacker/background.png

INCLUDE+ shared/Dockerfile.gui

#
# Install tools
#
# APT
RUN apt-get -y install \
        ettercap-common \
        tcpdump \
        iptables \
        python-dev \
        python3-pip

# Copy rshijack executable
COPY hosts/attacker/rshijack /usr/local/bin/rshijack
RUN chmod +x /usr/local/bin/rshijack

# Copy mitmproxy executables
COPY hosts/attacker/mitmproxy /usr/local/bin/mitmproxy
RUN chmod +x /usr/local/bin/mitmproxy
COPY hosts/attacker/mitmdump /usr/local/bin/mitmdump
RUN chmod +x /usr/local/bin/mitmdump

# Copy sslstrip script
COPY hosts/attacker/sslstrip.py /root/Desktop/sslstrip.py
