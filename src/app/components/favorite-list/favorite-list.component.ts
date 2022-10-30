import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html'
})
export class FavoriteListComponent implements OnInit {

  favoriteProduct: Product[] = [];
  products:Product[] = [];
  changeProduct!: Product


  constructor(private productService:ProductService,) {
    this.products = this.productService.getAllProducts();

    for(let product of this.products){
      if(product.favorite){
        this.favoriteProduct.push(product)
      }
    }
  }

  ngOnInit(): void {
  }

  removeFromList(product: Product){
    this.changeProduct = this.productService.getProductById(product.id);

    this.changeProduct.favorite = false;
  }

}
