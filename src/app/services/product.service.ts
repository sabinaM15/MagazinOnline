import { Injectable } from "@angular/core";
import { sample_products } from "../data";
import { Product } from "../shared/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  constructor(){}

  getAllProducts(): Product[]{
    return sample_products;
  }

  getAllProductsBySearchTerm(searchTerm:string){
    return this.getAllProducts().filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getProductById(productId:string):Product{
    return this.getAllProducts().find(product => product.id == productId) ?? new Product();
  }
}
