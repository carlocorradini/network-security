# Download ubuntu image
FROM ubuntu

# Disable Prompt During Packages Installation
ARG DEBIAN_FRONTEND=noninteractive

#
# Install tools
#
RUN apt-get update \
    && apt-get -y install --no-install-recommends \
        iputils-ping \
        net-tools \
        iproute2 \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get clean