# fakeREST

This is an OpenAPI compliant REST API to obtain random fake data. It uses and follows [faker.js](https://fakerjs.dev) methods and options (as of v8.0.2).

It uses [TRPC](https://trpc.io) and [trpc-openapi](https://github.com/jlalmes/trpc-openapi) to generate the endpoints and documentation, and [Nitro](https://nitro.unjs.io/) as the base server.

The interactive documentation is available at `/swagger`.

The OpenAPI doc is available at `/openapi`.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install
```

## Development Server

Start the development server on <http://localhost:3000>

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

Check out the [deployment documentation](https://nitro.unjs.io/deploy) for more information.
