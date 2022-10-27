import { Injectable } from "@angular/core";
import { sample_products } from "../data";
import { Product } from "../models/product.model";

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


  updateProduct(product: Product){
    let index = sample_products.findIndex(x => x.id = product.id)
    console.log(product)
    sample_products[index] = product
  }

  deleteProduct(product:Product){
    console.log("Product ",product)
    const index= sample_products.indexOf(product);
    // console.log("Index:", index)
    sample_products.splice(index, 1);
    // console.log(sample_products)
  }

  saveProduct(product:Product){
    sample_products.push(product);
  }

  sortProductsByName(){
    sample_products.sort((a,b) => a.name > b.name ? 1 : -1)
  }

  sortProductsByPrice(){
    sample_products.sort((a,b) => a.price > b.price ? 1 : -1)
  }
}
