# Afus
![GitHub release (latest by date)](https://img.shields.io/github/v/release/enquestor/afus)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/enquestor/afus/build.yml)

A fucking url shortener.

## Features
- Simple url shortening.
- Keyboard shortcuts for ease of use.
- QR code svg generation.
- Simple rate limiting.
- Easy docker deployment.

## Quick Start
### 1. Get the example docker-compose.yml
You can copy it directly or use shell:
```
curl https://raw.githubusercontent.com/enquestor/afus/master/docker-compose.yml >> docker-compose.yml
```

### 2. Run with docker compose
```
docker compose up -d
# or docker-compose up -d if you're using an older version of docker
```

## Options
These options can be configured by setting environment variables.

| Env | Default | Example | Description |
| - | - | - | - |
| `AFUS_URL` | - | `https://nqstr.cc` | The url of your site. This is used to prevent recursive url redirecting. |
| `AFUS_TITLE` | `Afus` | `nqstr` | The title of your site. |
| `AFUS_SUBTITLE` | `A fucking URL shortener.` | `Enquestor's URL shortener.` | The subtitle of your site. |
| `TTL` | `60` | - | Setting `TTL` to `60` and `LIMIT` to `6` rate limits a single user to 6 urls in a minute. |
| `LIMIT` | `6` | - | Same as above |

## Build Locally
```
git clone git@github.com:enquestor/afus.git
cd afus
docker build .
```

## Development
```
# clone the repo
git clone git@github.com:enquestor/afus.git
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
