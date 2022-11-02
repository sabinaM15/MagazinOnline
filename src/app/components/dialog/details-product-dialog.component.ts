import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './details-product-dialog.component.html',
  styleUrls: ['./details-product-dialog.component.css']
})
export class DialogComponent implements OnInit {
  product!: Product;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product) { }

  ngOnInit(): void {
  }

  addToCart(productId: string) {
    this.product = this.productService.getProductById(productId)
    this.cartService.addToCart(this.product);
    // this.router.navigateByUrl('/home');
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
