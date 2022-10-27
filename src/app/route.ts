import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { AddressDetailComponent } from "./components/address-detail/address-detail.component";
import { CartPageComponent } from "./components/cart-page/cart-page.component";
import { EditProductComponent } from "./components/edit-product/edit-product.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'home', component:HomeComponent},
  { path: 'search/:searchTerm', component:HomeComponent},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: 'address/:id', component: AddressDetailComponent},
  { path: 'cart-page', component: CartPageComponent},
  { path: 'addProduct', component: AddProductComponent},
  { path: 'editProduct/:id', component: EditProductComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
