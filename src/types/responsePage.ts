import { Product } from "./Product";

export type ResponsePage<T> = {
  products: Product[];
  count: number;
};
