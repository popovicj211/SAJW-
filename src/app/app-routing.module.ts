import { AboutwatchComponent } from './modules/aboutwatch/components/aboutwatch/aboutwatch.component';
import { ProductsComponent } from './modules/products/components/products/products.component';
import { ContactComponent } from './modules/contact/components/contact/contact.component';
import { HomeComponent } from './modules/home/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path : '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component : HomeComponent},
  {path:'watches', component : ProductsComponent},
  {path: 'watches/gender/:name' , component: ProductsComponent},
  {path: 'watches/made/:name' , component: ProductsComponent},
  {path:'aboutwatch' , component : AboutwatchComponent },
  {path:'contact' , component : ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
