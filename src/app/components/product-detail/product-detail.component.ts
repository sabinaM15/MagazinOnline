import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product
  constructor(activatedRoute:ActivatedRoute, productService: ProductService) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
        this.product = productService.getProductById(params['id']);
    })
   }

  ngOnInit(): void {
  }

}
