import { RootService } from '../../root/root.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class PipesPipe implements PipeTransform {

  constructor(private myService:  RootService){ } 

  transform(items: any[], idC: number , idM: number): any {
        if(idC > 0){
                return items.filter(item => item.types.id == idC);
         }else if(idM > 0){

           return items.filter(item => item.made.id == idM);
        } else{
              return items
        }
  }

}
