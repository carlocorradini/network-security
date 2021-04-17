# Download ubuntu image
FROM dorowu/ubuntu-desktop-lxde-vnc:focal-lxqt

#
# ARGs
#
# Disable Prompt During Packages Installation
ARG DEBIAN_FRONTEND=noninteractive
# Background image
ARG BACKGROUND_IMAGE

#
# Install tools
#
RUN apt-get update
RUN apt-get -y install \
        iputils-ping \
        net-tools \
        iproute2 \
        arping \
        vim

#
# Background image
#
RUN mkdir /root/media
COPY ${BACKGROUND_IMAGE} /root/media/background.png
RUN sed -i.bak "s~^\(Wallpaper=\).*~\1/root/media/background.png~" /root/.config/pcmanfm-qt/lxqt/settings.conf \
        && sed -i.bak "s~^\(WallpaperMode=\).*~\1center~" /root/.config/pcmanfm-qt/lxqt/settings.conf \
        && sed -i.bak "s~^\(BgColor=\).*~\1#333333~" /root/.config/pcmanfm-qt/lxqt/settings.conf