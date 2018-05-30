# Step 1

Go back to the [`master`](https://github.com/nikolasburk/amsjs-workshop) branch.

## Usage

### Deploy the Prisma service

```bash
npm install -g prisma
prisma deploy
```

> **Note**: ...

### Start the server

```bash
node src/index.js
```

### Open a GraphQL Playground

```bash
npm install -g graphql-cli
graphql playground
```

## Sample queries/mutations

```graphql
query {
  posts(searchString: "QL") {
    id
    title
    content
    published
  }
}
```

```graphql
query {
  post(id: "post-0") {
    id
    title
    content
    published
  }
}
```