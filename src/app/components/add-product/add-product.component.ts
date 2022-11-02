import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { AddressService } from 'src/app/services/address.service';
import { Address } from 'src/app/models/address.model';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { Router } from '@angular/router';

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
  invalidName: boolean = true;
  invalidPrice: boolean = true;
  invalidAddress: boolean = true;

  constructor(private productService: ProductService, private addressService: AddressService, private router: Router) {
    this.addresses = this.addressService.getAllAddresses();
    let index = this.productService.findLastId();
    let indexProduct = this.productService.findLastId();
    let indexAddress = indexProduct.toString();
    // && this.invalidCode && this.invalidStreet && this.invalidNum && this.invalidCity)

  }

  ngOnInit(): void {

  }
  addAddress() {
    this.newAddresses.push({
      id: this.addresses.length,
      code: '',
      street: '',
      num: 0,
      city: ''
    });
    
  }

  removeAddress(i: number) {
    this.newAddresses.splice(i, 1);
  }

  clickCounter() {
    this.count += 1
  }

  createProduct() {

    let indexProduct = this.productService.findLastId();
    let newIdProduct = indexProduct.toString();
    this.invalidName = false;
    this.invalidPrice = false;
    this.invalidAddress = false;

    for (let adr of this.newAddresses) {
      adr.id = this.addresses.length;
      if(adr.code !== '' && adr.street !== '' && adr.city !== '' && adr.num !== 0){
        this.invalidAddress = true
        this.addressService.saveAddress(adr)
      }
      
      
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
    

    if (this.newProductName !== undefined) {
      this.invalidName = true;
    }
    if (this.newProductPrice !== undefined) {
      this.invalidPrice = true;
    }

    console.log(this.invalidAddress)
    if (this.invalidName && this.invalidPrice && this.invalidAddress) {
      this.productService.saveProduct(newProduct)
      this.router.navigateByUrl('/home');
    }
        
  }

}
