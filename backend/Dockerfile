FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN apt-get update

RUN npm install

EXPOSE 1574

CMD [ "npm", "start" ]