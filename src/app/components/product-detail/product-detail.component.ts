import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Address } from 'src/app/models/address.model';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product
  addresses: Address[] = []

  constructor(
    activatedRoute:ActivatedRoute, 
    productService: ProductService, 
    private cartService: CartService, 
    private addressService: AddressService,
    private router: Router)
    {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
        this.product = productService.getProductById(params['id']);
        this.addresses = addressService.getAllAddresses();
        // console.log(this.addresses);
    })
   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart-page');
    // console.log("Product added to cart!")

  }

}
