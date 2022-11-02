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
  addresses: Address[] = [];
  flag: boolean = false;
  // address!: Address;
  constructor(private route: ActivatedRoute, private productService: ProductService, private addressService: AddressService) { 
    console.log(this.newAddresses)
  }

  public newAddresses: Address[] = [];


  ngOnInit(): void {
    let productId: string = this.route.snapshot.params['id'];
    this.selectedProduct = this.productService.getProductById(productId);
    this.allAddresses = this.addressService.getAllAddresses();
    this.addresses = this.addressService.getAllAddresses();
    for(let address in this.allAddresses){

      for(let adr in this.selectedProduct.address){
        if(adr === address){
          this.oneAddress = this.addressService.getAddressById(parseInt(address));
          this.selectedAddress.push(this.oneAddress);
        }
      }
    }
  }

  saveChanges(){
    for(let adr of this.newAddresses){
      this.addressService.saveAddress(adr)
      this.selectedProduct.address.push(adr)
    }
    
    this.productService.updateProduct(this.selectedProduct);

    console.log(this.selectedProduct)
  }

  addAddress() {
    this.flag = true;
    this.newAddresses.push({
      id: this.addresses.length + 1,
      code: '',
      street: '',
      num: 0,
      city: ''
    });
  }


}
