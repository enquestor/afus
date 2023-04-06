FROM node:18-alpine as build-server

WORKDIR /app

COPY ./server/tsconfig*.json ./
COPY ./server/package*.json ./
RUN npm ci

COPY ./server/src/ ./src
COPY ./server/database ./database
RUN npm run build

FROM node:18-alpine as build-web

WORKDIR /app

COPY ./web/package*.json ./
RUN npm ci

COPY ./web .
RUN npm run build

FROM node:18-alpine as production

WORKDIR /app

# install production dependencies
COPY ./server/package*.json ./
RUN npm ci --omit=dev

# copy production build
COPY --from=build-server /app/dist/ ./server/
COPY --from=build-web /app/dist/ ./web/

# webenv_setup 
COPY ./server/webenv_setup.sh ./webenv_setup.sh
RUN chmod a+x ./webenv_setup.sh

EXPOSE 3000

CMD ./webenv_setup.sh && npm run migration:prod && node ./server/src/main.js