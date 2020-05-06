import { Watches } from './../../../services/products/interface/watches';
import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 /* @Input('type') type:number;
  
  @Input() made:number;

  private data:any
  private dataStr:any
  private result:any[]
private  SearchResultResponseForlocation:any[];
  private watchesarr: any
*/

@Input() watch:any[]
  constructor(/* private watchesService :  ProductsService*/ ) { 
                  // this.data = watchesService
                  
  }

  ngOnInit() {
   /* console.log(this.type)

 this.data.getWatchesType(this.type).subscribe(
  data => {
             this.dataStr =  JSON.stringify(data)
      this.SearchResultResponseForlocation = JSON.parse(this.dataStr);
          this.result = this.SearchResultResponseForlocation.filter(f => f.type.id == this.type)
    console.log(this.result)
    this.watchesarr = this.result
  },
  error => {
      console.log("Error in recieving data");
  }
);*/


  }
  
  

}
