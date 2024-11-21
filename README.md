# TSI Designathon

Here is a project template for the designathon. For this project, you *must* use **Vue**, **Nuxt**, and **Vuetify**. All these libraries come pre-installed with this template. Please refer to the [Setup](#setup) and [Development Server](#development-server) sections to get started.

## Deadline

Please email a submission link of your forked repo to `development@trans-system.com` no later than **Monday, November 26th, 2024 at 11:59pm PST**. Any commits beyond the deadline **will** invalidate your submission.

## Task

The task at hand is to provide an example directory for a small set of user profiles. This should only take an hour or so, but you are more than welcome to take as long as you'd like until the submission deadline. For the sake of fairness, *no late submissions will accepted*.

We have provided a JSON payload for you to use as `src/assets/payload.json`. This is a design challenge, thus all app infrastructure will be provided to you in `src/pages/index.vue`. I have created a composable called `usePayload` that will provide the data and relevant types for you to design the page. You are more than welcome to modify any file in the project, but please leave the JSON payload **exactly** as it is provided.

The purpose of this challenge is purely for us to gauge your design ability and aptitude, so please do not worry about code linting/formatting.

## Setup

This template requires you at minimum the latest LTS version of Node.
You can install this quickly using [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows) depending on your machine. We do not support MacOS or any Linux distributions in production, but you can complete this in any environment of your choice.

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Resources

We've provided a few resources in case you need documentation or examples.

- [Vue documentation](https://vuejs.org/guide/introduction.html)
- [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction)
- [Vuetify documentation](https://vuetifyjs.com/en/introduction/why-vuetify/)