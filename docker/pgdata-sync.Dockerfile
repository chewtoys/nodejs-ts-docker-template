FROM ubuntu

USER root

RUN apt-get update -y

RUN apt-get install rsync -y