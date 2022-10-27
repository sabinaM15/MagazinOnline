import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StarRatingComponent } from "ng-starrating";
import { AddressService } from "src/app/services/address.service";
import { ProductService } from "src/app/services/product.service";
import { Address } from "src/app/models/address.model";
import { Product } from "src/app/models/product.model";

@Component({
  selector:'app-home',
  templateUrl:'./home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit{
  products:Product[] = [];
  addresses: Address[] = [];
  newProduct!: Product;
  sortByPriceProducts: Array<Product> = []

  constructor(
    private productService:ProductService,
    private addressService: AddressService,
    activatedRoute:ActivatedRoute
    ){
      activatedRoute.params.subscribe((params) => {
        if(params['searchTerm']){
          this.products = this.productService.getAllProductsBySearchTerm(params['searchTerm']);
          this.addresses = this.addressService.getAllAddresses();
        }else{
          this.products = productService.getAllProducts();
          this.addresses = this.addressService.getAllAddresses();
        }

        console.log("Products:", this.products)
      })
  }
  ngOnInit(): void {}

  sortByName(){
    return this.productService.sortProductsByName();
  }
  sortByPrice(){
    return this.productService.sortProductsByPrice();
  }

  deleteProduct(productId:string){
    // console.log(productId);
    // const id: number = parseInt(productId);
    const product = this.productService.getProductById(productId);
    return this.productService.deleteProduct(product);
  }

  minPrice(m:string){
    console.log(m)
    return m;
  }
  maxPrice(m:string){
    console.log(m)
    return m;
  }
  searchPriceRange(m1: string, m2: string){
    
    let min = parseInt(this.minPrice(m1))
    let max = parseInt(this.maxPrice(m2))
    // console.log(min, max, this.products);
    for(let product in this.products){
      this.newProduct = this.productService.getProductById(product)
      // console.log(this.newProduct.price)
      // let price = parseInt(this.newProduct.price);
      if(this.newProduct.price > min && this.newProduct.price < max){
        // console.log("Pret: ", this.newProduct.price)
        this.sortByPriceProducts.push(this.productService.getProductById(this.newProduct.id));
      }

      // console.log(this.sortByPriceProducts)
    }
    this.products = this.sortByPriceProducts
    // console.log(this.products)
    
  }

  // onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
  //   alert(`Old Value:${$event.oldValue}, 
  //     New Value: ${$event.newValue}, 
  //     Checked Color: ${$event.starRating.checkedcolor}, 
  //     Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  // }
  
}

