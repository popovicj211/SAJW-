import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition, animate , style , state, animation, keyframes, useAnimation} from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css'],
  animations : [
           
             
    trigger('slider' , [
     transition(':enter' , [
          style({transform: 'translateX(-80px)'}),
          animate(2000)
     ]),
     transition(':leave', 
     animation(
       animate('0.5s ease-in' , keyframes([
               style({
                  offset: 0.2,
                  opacity: 1,
                   transform: 'translateX(20px)'
               }),
               style({
                 offset: 1,
                 opacity: 0,
                  transform: 'translateX(-100%)'
              })
       ]))
  )      
     )
])


]
})

export class SlidesComponent implements OnInit {
 
str:string

  constructor(private router: Router) { }

  ngOnInit() {

  }
/*
  bestWatches(){
    this.router.navigate(['home'])
          window.scroll(-20,-20) 
  }
*/

}
