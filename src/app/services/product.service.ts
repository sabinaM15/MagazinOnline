import { Injectable } from "@angular/core";
import { sample_products } from "../data";
import { Product } from "../shared/product.model";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  constructor(private http: HttpClient){}

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
}
