import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  selectedProduct!: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) { 
    
  }

  ngOnInit(): void {
    let productId: string = this.route.snapshot.params['id'];
    this.selectedProduct = this.productService.getProductById(productId);
  }

  saveChanges(){
    this.productService.updateProduct(this.selectedProduct);
  }

}
