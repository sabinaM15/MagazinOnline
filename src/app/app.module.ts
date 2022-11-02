import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './route';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddressDetailComponent } from './components/address-detail/address-detail.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { DialogComponent } from './components/dialog/details-product-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartPageComponent,
    EditProductComponent,
    AddProductComponent,
    AddressDetailComponent,
    FavoriteListComponent,
    
  ],
  entryComponents:[DialogComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    InputTextModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
