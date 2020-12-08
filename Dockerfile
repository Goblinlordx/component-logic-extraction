FROM node:15-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
RUN npm i

COPY . .

CMD ["npm", "start"]