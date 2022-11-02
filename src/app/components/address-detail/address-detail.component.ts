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
  productAdr!: Array<any>;
  productsToDispaly: Product[] = []

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
      for(let adr of product.address){
        if(this.address.id === adr.id){
          this.productsToDispaly.push(product)
        }
      }
    }
   
  }


  ngOnInit(): void {
  }

}
