# Download ubuntu image
FROM dorowu/ubuntu-desktop-lxde-vnc:focal-lxqt

#
# ARGs
#
# Disable Prompt During Packages Installation
ARG DEBIAN_FRONTEND=noninteractive
ARG BACKGROUND_IMAGE

#
# Install tools
#
RUN apt-get update --fix-missing
RUN apt-get -y install \
        iputils-ping \
        net-tools \
        iproute2 \
        arping
RUN apt-get clean

#
# Background image
#
RUN mkdir /root/media
COPY ${BACKGROUND_IMAGE} /root/media
RUN sed -i.bak "s~^\(Wallpaper=\).*~\1/root/media/${BACKGROUND_IMAGE}~" /root/.config/pcmanfm-qt/lxqt/settings.conf
RUN sed -i.bak "s~^\(WallpaperMode=\).*~\1center~" /root/.config/pcmanfm-qt/lxqt/settings.conf
RUN sed -i.bak "s~^\(BgColor=\).*~\1#333333~" /root/.config/pcmanfm-qt/lxqt/settings.conf