import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute, NavigationEnd } from "@angular/router";
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
  sortByPriceProducts: Array<Product> = [];
  flagName : boolean = true;
  flagPrice : boolean = true;
  iconColor: string = 'red';
  min: number = 0;
  max: number = 0;
  //   this.iconColor = val ? 'red' : 'white';
  // @Output() vote = new EventEmitter();
  

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
          console.log(this.products)
        }
        // console.log("Min:",this.min);
        // console.log("Max:",this.max);

        // console.log("Products:", this.products)
        // console.log("Adrese: ", this.addresses)
      })
  }
  ngOnInit(): void {}

  // openDialog() {
  //   this.dialog.open(DialogDataExampleDialog, {
  //     data: {
  //       animal: 'panda',
  //     },
  //   });
  // }

  sortByName(){
    // return this.productService.sortProductsByNameDesc();
    if(this.flagName){
      this.flagName = false;
      return this.productService.sortProductsByNameAsc();
    }else{
      this.flagName = true 
      return this.productService.sortProductsByNameDesc();
    }
  }
  sortByPrice(){
    if(this.flagPrice){
      this.flagPrice = false;
      return this.productService.sortProductsByPriceAsc();
    }else{
      this.flagPrice = true 
      return this.productService.sortProductsByPriceDesc();
    }
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
    
    this.min = parseInt(this.minPrice(m1))
    this.max = parseInt(this.maxPrice(m2))
    

    for(let product in this.products){
      this.newProduct = this.productService.getProductById(product)
      // console.log(this.newProduct.price)
      // let price = parseInt(this.newProduct.price);
      if(this.newProduct.price > this.min && this.newProduct.price < this.max){
        // console.log("Pret: ", this.newProduct.price)
        this.sortByPriceProducts.push(this.productService.getProductById(this.newProduct.id));
      }

      // console.log(this.sortByPriceProducts)
    }
    this.products = this.sortByPriceProducts
    // console.log(this.products) 
  }

  addToFavourite(product: Product){
    product.favorite = true
  }

  
}

