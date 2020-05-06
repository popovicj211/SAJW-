import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate , style , state, animation, keyframes, useAnimation} from '@angular/animations';

@Component({
  selector: 'app-aboutwatch',
  templateUrl: './aboutwatch.component.html',
  styleUrls: ['./aboutwatch.component.css'],
  animations: [

    trigger('fades', [
          state('void', style({opacity: 0})),
           transition("void <=> *", [
                   animate(2000)
           ])
    ])

]
})
export class AboutwatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
