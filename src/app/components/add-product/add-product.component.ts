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
  vectorAdreesses!:  Address[];
  addresses: Address[] = [];

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

  clickCounter(){
    this.count += 1
    // console.log(this.count)
  }
  
  createProduct(){
    let indexProduct = this.productService.findLastId();
    let newIdProduct = indexProduct.toString();

    let indexAddress = this.addressService.findLastId();
    let newAddress: Address = {
      id: indexAddress,
      code: this.newProductAddressNickname,
      street: this.newProductAddressStreet,
      num: this.newProductAddressNumber,
      city: this.newProductAddressCity
    }

    this.addressService.saveAddress(newAddress)
      
    let newProduct: Product = {
      id: newIdProduct,
      name: this.newProductName,
      price: this.newProductPrice,
      address: [this.vectorAdreesses],
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
