import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product
  constructor(activatedRoute:ActivatedRoute, productService: ProductService, private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
        this.product = productService.getProductById(params['id']);
    })
   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart-page');
    console.log("Product added to cart!")

  }

}
