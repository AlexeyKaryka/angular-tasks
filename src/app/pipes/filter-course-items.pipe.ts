import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCourseItems'
})
export class FilterCourseItemsPipe implements PipeTransform {

   filterByValue = filteringValue => item => item.Title.toLowerCase().includes(filteringValue.toLowerCase());

   transform(value: any, args?: any): any {
      const { items, filteringValue } = value;
      const filteredItems = items.filter(this.filterByValue(filteringValue));

      return filteredItems;
   }

}
