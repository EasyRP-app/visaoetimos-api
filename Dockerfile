FROM node:14.17.1-alpine As production

WORKDIR /usr/src/app

EXPOSE 4000

COPY package*.json ./

CMD apt install yarn

RUN yarn

COPY . .

RUN yarn build
