import { Schema, model } from "mongoose";
import type { Document } from "mongoose";

type IProduct = {
  name: string;
  price: number;
  description: string;
  barCode: string;
};

export type ProductDocument = Document & IProduct;

const ProductSchema = new Schema<ProductDocument>({
  name: {
    type: String,
    required: true,
    index: true,
    description: "Product name",
  },
  price: {
    type: Number,
    required: true,
    description: "Product price in cents",
  },
  description: {
    type: String,
    required: true,
    description: "Product description",
  },
  barCode: {
    type: String,
    required: true,
    description: "Product bar code",
  },
});

export const ProductModel = model<ProductDocument>("Product", ProductSchema);
