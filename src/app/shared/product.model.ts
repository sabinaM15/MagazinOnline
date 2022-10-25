export class Product {
  id!: string;
  name!: string;
  price?: number;
  address!: {
    nickname: string;
    street: string;
    num: number;
    city: string;
  }
  stock?: number;
  description?: string;
  comments?: string;
  rating?: number;
  img?: string;
}
