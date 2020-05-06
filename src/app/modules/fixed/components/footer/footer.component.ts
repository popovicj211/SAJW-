import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate , style , state, animation, keyframes, useAnimation} from '@angular/animations';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations :[
    trigger('imgover', [
      state('initial', style({
        opacity: 1,
        width: 150
      })),
      state('final', style({
        opacity: 0.7,
        width: 160
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]) 
  ]
})
export class FooterComponent implements OnInit {

 
  private currentState = 'initial';

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }


  constructor() { }

  ngOnInit() {
  }

}
