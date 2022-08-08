FROM node:lts-alpine as package_json_process
RUN apk add jq
COPY ./package.json /tmp/package.original.json
RUN cat /tmp/package.original.json | jq '{dependencies: .dependencies, devDependencies: .devDependencies}' &> /tmp/package.json

FROM node:lts-alpine
WORKDIR /app
COPY ./yarn.lock /tmp/
COPY ./.npmrc /tmp/
COPY --from=package_json_process /tmp/package.json /tmp/package.json
RUN yarn install --cwd /tmp
RUN cp -a /tmp/node_modules ./node_modules
COPY . .
RUN yarn specs:build
ENTRYPOINT ["yarn", "start"]
