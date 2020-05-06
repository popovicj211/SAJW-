import { Injectable } from '@angular/core';
import { BehaviorSubject , Observable , Subject } from 'rxjs';


export interface myData {
  numb:number;
}


@Injectable({
  providedIn: 'root'
})
export class RootService {

  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();

  constructor() { 
    this.myMethod$ = this.myMethodSubject.asObservable();
  }


  myMethod(data) {
    // console.log(data); 
      this.myMethodSubject.next(data);
  }

}
