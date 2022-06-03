FROM alpine:3.4

WORKDIR /devops

RUN apk update && apk add \
curl \
vim

COPY file.sh ./

CMD [ "./file.sh" ]