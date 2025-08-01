# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

check the git repository

--------------------------------------------------------------------------------------------------------------------------------

This application is build and developed with:
- node version: "22.13.0"

--------------------------------------------------------------------------------------------------------------------------------

NOTE: This application is create with pnpm with typescript

-typescript project cannot be execute/ run directly, JavaScript do.
-so to run it we need to convert it into javascript code. with typescript compiler (TSC).
     CMD:
          - npx tsc --init,  // to initialize typescript config
          - npm install typescript,
          - npm run build / tsc -b (to build the TS project to generate js code ) //write it in package.json as a build script
          - npm run start / node dist/index.js (to run the project)

--------------------
|        DB        |
--------------------
- Here i use prisma orm for the database setup.
- We using postgraSql,
- first run the postgres server to migrate the database,
     cmd:
     - docker run -p 5432:5432 -e POSTGRES_PASSWORD=mypassword -d postgres

- write te model into schema.prisma file,
     The steps are given below for prisma:
     cmd: 
          1 - npm install prisma,
          2 - npx prisma init,
          3 - create a schema
          4 - start the database locally
          5 - go to our .env file in db and write the right postgres URL
          6 - npx prisma migrate dev


DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/yourdbname" demo url of .env file

postgresql://       → Protocol for PostgreSQL
postgres            → Username (default is "postgres")
yourpassword        → Your PostgreSQL password
localhost           → Host (since it’s running locally)
5432                → Default PostgreSQL port
yourdbname          → The name of your database

--------------------------------------------------------------------------------------------------------------------------------