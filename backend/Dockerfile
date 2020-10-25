FROM node:latest

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock
RUN yarn

COPY . .

CMD ["node", "server.js"]