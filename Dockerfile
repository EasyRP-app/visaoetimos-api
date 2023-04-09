FROM node:14.17.1-alpine As development

WORKDIR /usr/src/app

EXPOSE 4000

COPY package*.json ./

COPY yarn.lock ./

CMD apt install yarn

RUN yarn

COPY . .

RUN yarn build


FROM node:14.17.1-alpine As production

WORKDIR /usr/src/app

EXPOSE 4000

COPY package*.json ./

COPY yarn.lock ./


RUN yarn

COPY . .

RUN yarn build

CMD [ "yarn", "start" ]