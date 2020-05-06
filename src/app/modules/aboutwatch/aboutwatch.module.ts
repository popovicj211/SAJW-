import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutwatchComponent } from './components/aboutwatch/aboutwatch.component';



@NgModule({
  declarations: [AboutwatchComponent],
  imports: [
    CommonModule
  ],exports:[
    AboutwatchComponent
  ]
})
export class AboutwatchModule { }
