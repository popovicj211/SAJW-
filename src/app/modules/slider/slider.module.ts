import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/components/slides/slides.component';




@NgModule({
  declarations: [SlidesComponent],
  imports: [
    CommonModule
  ], exports: [
    SlidesComponent
  ]
})
export class SliderModule { }
