import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export const ProductType = new GraphQLObjectType({
  name: "ProductType",
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (product) => product.name,
    },
    price: {
      type: new GraphQLNonNull(GraphQLInt),
      resolve: (product) => product.price,
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (product) => product.description,
    },
    barCode: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (product) => product.barCode,
    },
  }),
});
