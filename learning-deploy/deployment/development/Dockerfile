FROM node:lts-alpine
ENV NODE_ENV=dev

WORKDIR /example-server

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 1337

CMD ["npm", "run", "start"]