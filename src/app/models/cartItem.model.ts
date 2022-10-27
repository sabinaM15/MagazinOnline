import { Product } from "./product.model";

export class CartItem{
    constructor(public product: Product){
    }
    quantity: number = 1;
    price: number | undefined = this.product.price;
}