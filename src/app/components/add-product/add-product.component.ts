import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { AddressService } from 'src/app/services/address.service';
import { Address } from 'src/app/models/address.model';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  newProductName!: string
  newProductPrice!: number

  newProductAddress!: Array<Address>
  newProductAddressNickname!: string
  newProductAddressStreet!: string
  newProductAddressNumber!: number
  newProductAddressCity!: string

  newProductStock!: number
  newProductDescription!: string
  newProductComments!: string
  newProductRating!: number
  newProductImage!: string
  addresses: Address[] = [];

  public newAddresses: Address[] = [{
    id: 0,
    code: '',
    street: '',
    num: 0,
    city: ''
  }];

  count = 1;

  constructor(private productService: ProductService, private addressService: AddressService) { 
    this.addresses = this.addressService.getAllAddresses();
    let index = this.productService.findLastId();
    // console.log("last id: ", index)
    let indexProduct = this.productService.findLastId();
    let newIdProduct = indexProduct.toString();

    let indexAddress = this.addressService.findLastId();

    
  }

  ngOnInit(): void {
    
  }
  addAddress() {
    this.newAddresses.push({
      id: this.addresses.length + 1,
      code: '',
      street: '',
      num: 0,
      city: ''
    });
  }

  removeAddress(i: number) {
    this.newAddresses.splice(i, 1);
  }

  clickCounter(){
    this.count += 1
    // console.log(this.count)
  }
  
  createProduct(){
    let indexProduct = this.productService.findLastId();
    let newIdProduct = indexProduct.toString();

    for(let adr of this.newAddresses){
      this.addressService.saveAddress(adr)
    }

    let newProduct: Product = {
      id: newIdProduct,
      name: this.newProductName,
      price: this.newProductPrice,
      address: [this.newAddresses],
      stock: this.newProductStock,
      description: this.newProductDescription,
      comments: this.newProductComments,
      rating: this.newProductRating,
      img: this.newProductImage
    }
    // console.log(newProduct)
    this.productService.saveProduct(newProduct)
  }

}
