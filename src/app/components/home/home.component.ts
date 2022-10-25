import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/app/shared/product.model";

@Component({
  selector:'app-home',
  templateUrl:'./home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit{
  products:Product[] = [];

  constructor(
    private productService:ProductService,
    activatedRoute:ActivatedRoute
    ){
      activatedRoute.params.subscribe((params) => {
        if(params['searchTerm']){
          this.products = this.productService.getAllProductsBySearchTerm(params['searchTerm']);
        }else{
          this.products = productService.getAllProducts();
        }
      })
  }
  ngOnInit(): void {

  }
}
