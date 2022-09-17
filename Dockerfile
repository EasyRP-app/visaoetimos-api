FROM node:16.15 AS development

WORKDIR /usr/src/

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

CMD "yarn" "run" "start:dev"


FROM node:16.15 AS production

WORKDIR /usr/src/

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn run build

CMD [ "yarn", "start" ]