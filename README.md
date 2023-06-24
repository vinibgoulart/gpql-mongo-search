# gpql-mongo-search

Search filter in a graphql query to search for generic values in mongodb

### tags
- mongoose
- express
- express-graphql
- graphql
- mongodb
- @entria/graphql-mongo-helpers
- search
- agregatte
- pipeline



## Run Locally

Clone the project

```bash
  git clone https://github.com/vinibgoulart/gpql-mongo-search.git
```

Go to the project directory

```bash
  cd gpql-mongo-search
```

Install dependencies

```bash
  yarn
```

Copy envs

```bash
  yarn env
```

Run seeder

```bash
  yarn seed
```

Start the server

```bash
  yarn dev
```

After that you can open graphql playground in your browser

```
http://localhost:4000/graphql/playground
```

## Testing

Some examples of queries to test the search

**Return all products:**
```gql
query {
  products {
    name
    description
    price
  }
}
```

**Return a product filtering by name:**
```gql
query {
  products(filters: {search: "Cell"}) {
    name
    description
    price
  }
}
```

**Return a product filtering by description:**
```gql
query {
  products(filters: {search: "Apple"}) {
    name
    description
    price
  }
}
```

