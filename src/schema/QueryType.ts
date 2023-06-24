import { GraphQLObjectType } from "graphql";
import { productField } from "../modules/product/ProductFields";

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "All queries",
  fields: () => ({
    ...productField()
  }),
});

export { QueryType };
