import { ProductsService } from './../../../services/products/products.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { map, filter  } from 'rxjs/operators'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 // @Input('type') type:number;
 private type:number;
 // @Input() made:number;
private made:number;
  private data:any
  private dataStr:any
  private result:any[]
private  SearchResultResponseForlocation:any[];
  private watchesarr: any


 
  cat(numb: number){
    this.type = numb;
// console.log(this.type);
this.filterType(this.type)

 }
  
  catMade(m: number){
       this.made = m;
       this.filterMade(this.made)
  }

  constructor( private watchesService :  ProductsService) { 
    this.data = watchesService
  }

  ngOnInit() {


   this.watchesService.getWatches().subscribe( data => {
    this.watchesarr = data;
    
})

  }

   filterType(filt: number) {
    console.log(this.cat)

    this.data.getWatchesType(filt).subscribe(
     data => {
                this.dataStr =  JSON.stringify(data)
         this.SearchResultResponseForlocation = JSON.parse(this.dataStr);
             this.result = this.SearchResultResponseForlocation.filter(f => f.type.id == filt)
       console.log(this.result)
       this.watchesarr = this.result
     },
     error => {
         console.log("Error in recieving data");
     }
   );
  }

  filterMade(filt: number) {
    console.log(this.cat)

    this.data.getWatchesType(filt).subscribe(
     data => {
                this.dataStr =  JSON.stringify(data)
         this.SearchResultResponseForlocation = JSON.parse(this.dataStr);
             this.result = this.SearchResultResponseForlocation.filter(f => f.made.id == filt)
       console.log(this.result)
       this.watchesarr = this.result
     },
     error => {
         console.log("Error in recieving data");
     }
   );
  }

}
