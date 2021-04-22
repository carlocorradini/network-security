# syntax = edrevo/dockerfile-plus

#
# ARGs
#
ARG BACKGROUND_IMAGE=hosts/attacker/background.png

INCLUDE+ shared/Dockerfile

#
# Install tools
#
# APT
RUN apt-get -y install \
        ettercap-common \
        tcpdump \
        git \
        iptables \
        build-essential \
        python-dev \
        python3-pip \
        libnetfilter-queue-dev
# pip
RUN pip3 install -U \
        scapy \
        git+https://github.com/kti/python-netfilterqueue

# Copy rshijack executable
COPY hosts/attacker/rshijack /usr/local/bin/rshijack
RUN chmod +x /usr/local/bin/rshijack

# Copy sslstrip executable
COPY hosts/attacker/sslstrip /usr/local/bin/sslstrip
RUN chmod +x /usr/local/bin/sslstrip