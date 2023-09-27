FROM ubuntu:20.04

WORKDIR /usr/src/app

RUN apt-get update

RUN apt-get -y install curl

COPY curler.sh .

RUN chmod +x curler.sh

CMD ./curler.sh