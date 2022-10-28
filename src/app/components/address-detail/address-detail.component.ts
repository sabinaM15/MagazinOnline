import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { ProductService } from 'src/app/services/product.service';
import { Address } from 'src/app/models/address.model';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit {

  address!: Address
  products: Product[] = []
  productAdr: Product[] = []
  index: any;

  constructor(
    activatedRoute:ActivatedRoute, 
    addressService: AddressService,
    productService: ProductService,
    private router: Router)
    {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
        this.address = addressService.getAddressById(params['id']);
    })
    this.products = productService.getAllProducts();
    
    for(let product of this.products){
      // console.log(product)
      for(let i in product.address){
        // console.log("i",i)
        // if(this.address.id === product.address[i]){
        //   this.productAdr.push(product)
        }
      }
      // 
    }
    // console.log(this.productAdr)
    // console.log(this.products)
    // console.log("Adresa",this.address)
   

  ngOnInit(): void {
  }

}
