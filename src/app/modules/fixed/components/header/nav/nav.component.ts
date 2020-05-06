import { Component, OnInit } from '@angular/core';

export interface Link {
        name: string;
        path: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


      public readonly links: Link[] = [
                {name: 'Home' , path: 'home'},
                {name: 'Watches' , path: 'watches'},
                {name: 'About watch' , path: 'aboutwatch'},
                {name: 'Contact' , path: 'contact'}
      ];

  constructor() { }

  ngOnInit() {
  }

}
