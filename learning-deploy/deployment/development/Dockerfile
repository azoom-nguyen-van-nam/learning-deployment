FROM node:lts-alpine
ENV NODE_ENV=dev

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 1337

CMD ["npm", "run", "start"]