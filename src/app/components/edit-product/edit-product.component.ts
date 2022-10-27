import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { ProductService } from 'src/app/services/product.service';
import { Address } from 'src/app/models/address.model';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  selectedProduct!: Product;
  selectedAddress: Array<Address> = [];
  allAddresses!: Address[];
  oneAddress!: Address;
  // address!: Address;
  constructor(private route: ActivatedRoute, private productService: ProductService, private addressService: AddressService) { 
    
  }

  ngOnInit(): void {
    let productId: string = this.route.snapshot.params['id'];
    this.selectedProduct = this.productService.getProductById(productId);
    this.allAddresses = this.addressService.getAllAddresses();
    // console.log("Adresele Produsului: ", this.selectedProduct.address)
    // console.log("Toate Adresele", this.allAddresses)
    for(let address in this.allAddresses){
      // console.log(address)

      for(let adr in this.selectedProduct.address){
        if(adr === address){
          this.oneAddress = this.addressService.getAddressById(parseInt(address));
          this.selectedAddress.push(this.oneAddress);
        }
      }
      // console.log(address)
    }
    // console.log(this.selectedAddress)
  }

  saveChanges(){
    this.productService.updateProduct(this.selectedProduct);
  }

}
