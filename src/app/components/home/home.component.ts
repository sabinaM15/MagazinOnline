import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from "@angular/core";
import { ActivatedRoute, NavigationEnd } from "@angular/router";
import { AddressService } from "src/app/services/address.service";
import { ProductService } from "src/app/services/product.service";
import { Address } from "src/app/models/address.model";
import { Product } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart.service";
import { BehaviorSubject } from "rxjs";
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from "../dialog/details-product-dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  addresses: Address[] = [];
  newProduct!: Product;
  product!: Product;
  sortByPriceProducts: Array<Product> = [];
  flagName: boolean = true;
  flagPrice: boolean = true;
  iconColor: string = 'red';
  min: number = 0;
  max: number = 0;
  prd!: Product;

  minRange: any;
  maxRange: any;

  minValue: any;
  maxValue: any;

  minProducts: any;

  slcAddress: any;

  constructor(
    private productService: ProductService,
    private addressService: AddressService,
    private cartService: CartService,
    public dialog: MatDialog,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.products = this.productService.getAllProductsBySearchTerm(params['searchTerm']);
        this.addresses = this.addressService.getAllAddresses();
      } else {
        this.products = productService.getAllProducts();
        this.addresses = this.addressService.getAllAddresses();
      }
    })
  }
  ngOnInit(): void {
    this.sortByPriceProducts = this.products;
  }

  setMinValue(event: any) {
    this.minRange = event;
    this.minValue = this.minRange;
    this.search(this.minValue, this.maxValue)
    // this.searchMin(this.minRange);
  }

  setMaxValue(event: any) {
    this.maxRange = event;
    this.maxValue = this.maxRange;
    this.search(this.minValue, this.maxValue)
    // this.searchMax(this.maxRange);
  }

  selectedAddress(event: any){
    const sortByAddressCopy = []
    this.slcAddress = event;
    console.log(this.products)

    for(let product of this.products){
      for(let address of product.address){
        if(address.code === this.slcAddress){
          sortByAddressCopy.push(product)
        }
      }
    }
    if(this.slcAddress === 'All Addresses'){
      for(let product of this.products){
        sortByAddressCopy.push(product)
      }
    }
  
    this.sortByPriceProducts = sortByAddressCopy
    // console.log(this.sortByAddress)
    // console.log(sortByAddressCopy)
  }

  sortByName() {
    if (this.flagName) {
      this.flagName = false;
      return this.productService.sortProductsByNameAsc();
    } else {
      this.flagName = true
      return this.productService.sortProductsByNameDesc();
    }
  }
  sortByPrice() {
    if (this.flagPrice) {
      this.flagPrice = false;
      return this.productService.sortProductsByPriceAsc();
    } else {
      this.flagPrice = true
      return this.productService.sortProductsByPriceDesc();
    }
  }

  deleteProduct(productId: string) {
    const product = this.productService.getProductById(productId);
    return this.productService.deleteProduct(product);
  }

  search(min: string, max: string) {
    const sortByPriceProductsCopy = [];
    if (!min && max) {
      for (let product of this.products) {
        if (product.price < parseInt(max)) {
          sortByPriceProductsCopy.push(product);
        }
      }
    }
    if (min && !max) {
      for (let product of this.products) {
        if (product.price > parseInt(min)) {
          sortByPriceProductsCopy.push(product);
        }
      }
    }
    if (min && max) {
      for (let product of this.products) {
        if (product.price > parseInt(min) && product.price < parseInt(max)) {
          sortByPriceProductsCopy.push(product);
        }
      }
    }
    if (!min && !max) {
      for (let product of this.products) {
          sortByPriceProductsCopy.push(product);
      }
    }

    this.sortByPriceProducts = sortByPriceProductsCopy;
  }

  addToFavourite(product: Product) {
    if (product.favorite)
      product.favorite = false
    else
      product.favorite = true
  }

  addToCart(productId: string) {
    this.product = this.productService.getProductById(productId)
    this.cartService.addToCart(this.product);
  }

  openDialog(product: Product) {
    const dialogRef = this.dialog.open(DialogComponent,
      {
        data: product
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
