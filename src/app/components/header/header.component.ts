import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AddressService } from "src/app/services/address.service";
import { CartService } from "src/app/services/cart.service";
import { Address } from "src/app/models/address.model";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: 'app-header',
  templateUrl:  './header.component.html',
})
export class HeaderComponent implements OnInit{
  searchTerm ='';
  cartQuantity = 0;
  addresses: Address[] = [];

  constructor(
    activatedRoute:ActivatedRoute, 
    private router:Router, 
    cartService: CartService, 
    addressService: AddressService,
    _productService: ProductService
    ){

    activatedRoute.params.subscribe((params) =>{
      if(params['searchTerm'])
        this.searchTerm = params['searchTerm'];
    });

    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })

    this.addresses = addressService.getAllAddresses();
  }

  ngOnInit(): void {
  }
  
  search(term:string):void{
    if(term)
      this.router.navigateByUrl('/search/'+term);
    else
      this.router.navigateByUrl('/home');
  }
}
