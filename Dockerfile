FROM node:18-alpine as build-server

WORKDIR /app

COPY ./server/tsconfig*.json ./
COPY ./server/package*.json ./
RUN npm ci

COPY ./server/src/ src/
RUN npm run build

FROM node:18-alpine as build-web

WORKDIR /app

COPY ./web/package*.json ./
RUN npm ci

COPY ./web/ .
RUN npm run build

FROM node:18-alpine as production

WORKDIR /app

COPY ./server/package*.json ./
RUN npm ci --omit=dev

# Copy production build
COPY --from=build-server /app/dist/ ./dist/
COPY --from=build-web /app/dist/ ./public/

# Expose application port
EXPOSE 3000

# Start application
CMD [ "node", "dist/main.js" ]