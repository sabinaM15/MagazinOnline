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
    sample_products[index] = product
  }

  findLastId() {
    let lastProduct = sample_products[sample_products.length - 1]
    if (lastProduct) {
      let newId = parseInt(lastProduct.id)
      return newId + 1
    }
    return 1
  }
  
  deleteProduct(product:Product){
    const index= sample_products.indexOf(product);
    sample_products.splice(index, 1);
  }

  saveProduct(product:Product){
    sample_products.push(product);
  }

  sortProductsByNameAsc(){
    sample_products.sort((a,b) => a.name > b.name ? 1 : -1)
  }
  sortProductsByNameDesc(){
    sample_products.sort((a,b) => a.name < b.name ? 1 : -1)
  }

  sortProductsByPriceAsc(){
    sample_products.sort((a,b) => a.price > b.price ? 1 : -1)
  }

  sortProductsByPriceDesc(){
    sample_products.sort((a,b) => a.price < b.price ? 1 : -1)
  }
}
