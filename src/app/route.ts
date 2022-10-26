import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartPageComponent } from "./components/cart-page/cart-page.component";
import { EditProductComponent } from "./components/edit-product/edit-product.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'search/:searchTerm', component:HomeComponent},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: 'cart-page', component: CartPageComponent},
  { path: 'editProduct/:id', component: EditProductComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
