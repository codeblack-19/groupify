# Groupify

A web application used to split a list of names of people or items into a numbers groups by uploading a csv file.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Essentials

Create a Mongo Db project.
```.env
MONGODB_URL = "Your Mongo Db Connection String"
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```
