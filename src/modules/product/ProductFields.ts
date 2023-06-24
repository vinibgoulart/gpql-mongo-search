import { GraphQLList } from "graphql";
import { ProductType } from "./ProductType";
import { ProductFilterInputType } from "./filter/ProductFilterInputType";
import { productFilterMapping } from "./filter/ProductFilterMapping";
import { ProductModel } from "./ProductModel";
import { getPipeline } from "../utils/getPipeline";

export const productField = () => ({
  products: {
    type: new GraphQLList(ProductType),
    args: {
      filters: { type: ProductFilterInputType },
    },
    resolve: async (_, args, ctx) => {
      const pipeline = getPipeline(args.filters, ctx, productFilterMapping);

      if (pipeline) {
        return await ProductModel.aggregate(pipeline);
      }

      return await ProductModel.find({});
    },
  },
});
