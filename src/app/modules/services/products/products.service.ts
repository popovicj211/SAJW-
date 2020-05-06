
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map , filter } from 'rxjs/operators';
import { Watches} from './interface/watches';
import { Observable , from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    private jsonUrl:string = 'http://localhost:4200/assets/data/watches.json'
  constructor(private http: HttpClient) {}

  public getWatches() {
    return this.http.get(this.jsonUrl);
  }

    private resultsType: any
    private resultsMade: any
    private resultsBestWatches: any
     public getWatchesType(id: number){
   
        this.resultsType = this.http.get(this.jsonUrl).pipe()
        return this.resultsType
      }
    
      public getWatchesMade(id: number){

        this.resultsMade = this.http.get(this.jsonUrl).pipe()
        return this.resultsMade
      }

   

}
 