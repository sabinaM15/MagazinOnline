import { Address } from "./address.model";

export class Product {
  id!: string;
  name!: string;
  price!: number;
  address!: Array<Address['id']>;
  stock?: number;
  description?: string;
  comments?: string;
  rating?: number;
  img?: string;
}
