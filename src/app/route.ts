import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { AddressDetailComponent } from "./components/address-detail/address-detail.component";
import { CartPageComponent } from "./components/cart-page/cart-page.component";
import { EditProductComponent } from "./components/edit-product/edit-product.component";
import { FavoriteListComponent } from "./components/favorite-list/favorite-list.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'home', component:HomeComponent},
  { path: 'search/:searchTerm', component:HomeComponent},
  { path: 'address/:id', component: AddressDetailComponent},
  { path: 'cart-page', component: CartPageComponent},
  { path: 'addProduct', component: AddProductComponent},
  { path: 'editProduct/:id', component: EditProductComponent},
  { path: 'favoriteList', component: FavoriteListComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
