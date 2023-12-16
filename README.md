# Project up

```bash
    # install all packages
    npm ci
    # Prisma setup (run only once if file `prisma/schema.prisma` does not exist)
    npx prisma init --datasource-provider sqlite

    # create/apply migration -> generate the dev.db file
    npx prisma migrate dev
```
