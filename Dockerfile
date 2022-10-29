FROM node:14.17.1-alpine As production

WORKDIR /usr/src/app

RUN chown -Rh node:node /usr/src/app

EXPOSE 4000

COPY package*.json ./

RUN npm i -g yarn --force

RUN yarn

RUN yarn --global typeorm

COPY . .

CMD "yarn" "start:dev"

