import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

   transform(value: any, args?: any): any {
      return value < 60
         ? `${value}min`
         : `${this.getHours(value)}h ${this.getMinutesRemains(value)}min`;
   }

   getHours(minutes) {
      return Math.floor(minutes / 60);
   }

   getMinutesRemains(minutes) {
      return minutes - this.getHours(minutes) * 60;
   }

}
