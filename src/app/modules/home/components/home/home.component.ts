import { ProductsService } from './../../../services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate , style , state, animation, keyframes, useAnimation} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [

    trigger('fade', [
          state('void', style({opacity: 0})),
           transition("void <=> *", [
                   animate(2000)
           ])
    ])

]
})
export class HomeComponent implements OnInit {
private data:any
private watchesbest: any
private dataStr: string
private dataObject:any[]
private result:any[]
  constructor(private serviceProducts: ProductsService) { 
    this.data = serviceProducts
  }

  ngOnInit() {
    this.serviceProducts.getWatches().subscribe( data => {
      this.watchesbest = data;
    })

    this.data.getWatchesType().subscribe(
      data => {
                 this.dataStr =  JSON.stringify(data)
          this.dataObject = JSON.parse(this.dataStr);
              this.result = this.dataObject.filter(f => parseFloat(f.price) >= 30.000)
        console.log(this.result)
        this.watchesbest = this.result
      },
      error => {
          console.log("Error in recieving data");
      }
    );

  }

}
