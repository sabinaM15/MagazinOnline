import { Address } from "./address.model";

export class Product {
  [x: string]: any;
  id!: string;
  name!: string;
  price!: number;
  address!: Array<any>;
  stock?: number;
  description?: string;
  comments?: string;
  rating?: number;
  img?: string;
  favorite?: boolean;
}
