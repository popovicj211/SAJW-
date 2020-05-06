import { AppRoutingModule } from './../../app-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ProductsComponent, ProductComponent ],
  imports: [
    CommonModule,
    HttpClientModule/*,
    RouterModule*/,
    AppRoutingModule
  ],
  exports:[
    ProductsComponent,
    ProductComponent
  ]
})
export class ProductsModule { }
