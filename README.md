# Step 1

Go back to the [`master`](https://github.com/nikolasburk/amsjs-workshop) branch.

## Usage

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
  posts {
    id
    title
    content
    published
  }
}
```