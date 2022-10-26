import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl:  './header.component.html',
})
export class HeaderComponent implements OnInit{
  searchTerm ='';
  cartQuantity = 0;
  constructor(activatedRoute:ActivatedRoute, private router:Router, cartService: CartService){

    activatedRoute.params.subscribe((params) =>{
      if(params['searchTerm'])
        this.searchTerm = params['searchTerm'];
    });

    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
  }

  ngOnInit(): void {

  }
  search(term:string):void{
    if(term)
      this.router.navigateByUrl('/search/'+term);
  }
}
