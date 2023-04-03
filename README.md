# Afus

## Development
```
# clone the repo
git clone
cd afus

# start postgres
docker compose up -f docker-compose.dev.yml -d

# start web watch
cd web
npm install
npm run watch

# on second terminal
# symlink web dist to server folder
ln -s ./web/dist ./server/public

# start dev server
cd server
npm install
npm run start:dev
```

## Build
```
git clone
cd afus
docker build .
```