FROM node:lts-alpine

WORKDIR /app

COPY ./learning-deploy/package*.json ./
RUN npm install
COPY . .

CMD ["npm", "run", "start"]