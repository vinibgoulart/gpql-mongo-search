import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";

const app = express();
app.use(express.json());

app.use(
  "/graphql/playground",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

export default app;
