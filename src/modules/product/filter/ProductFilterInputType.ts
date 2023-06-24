import { GraphQLInputObjectType, GraphQLString } from 'graphql';

export const ProductFilterInputType = new GraphQLInputObjectType({
  name: 'ProductFilter',
  description: 'Used to filter Products',
  fields: () => ({
    search: {
      type: GraphQLString,
    },
  }),
});
