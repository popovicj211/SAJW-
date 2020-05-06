import { SliderModule } from './modules/slider/slider.module';
import { AboutwatchModule } from './modules/aboutwatch/aboutwatch.module';
import { ContactModule } from './modules/contact/contact.module';
import { HomeModule } from './modules/home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixedModule } from './modules/fixed/fixed.module';
import { ProductsModule } from './modules/products/products.module';
import { PipesPipe } from './modules/services/products/pipes/pipes.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PipesPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FixedModule,
    BrowserAnimationsModule,
    HomeModule,
    ContactModule,
    ProductsModule,
    AboutwatchModule,
    SliderModule
  ],
  exports:[
    AppRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
