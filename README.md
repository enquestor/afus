# Afus
A fucking url shortener.

## Development
```
# clone the repo
git clone git@github.com:Enquestor/afus.git
cd afus

# start postgres
docker compose up -f docker-compose.dev.yml -d

# start web dev server
cd web
npm install
npm run dev

# start nestjs dev server
cd server
npm install
npm run start:dev
```

## Build
```
git clone git@github.com:Enquestor/afus.git
cd afus
docker build .
```