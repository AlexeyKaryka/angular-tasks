import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

   sortFunction(a, b) {
      return new Date(a.CreationDate).getTime() - new Date(b.CreationDate).getTime();
   }

   transform(value: any, args?: any): any {
      return value.sort(this.sortFunction);
   }

}
