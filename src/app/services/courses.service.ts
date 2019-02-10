import { Injectable } from '@angular/core';
import { CourseItem, loremIpsum } from 'components/app-main/constants';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

   private courseItems: CourseItem[] = [
      new CourseItem(1, 'Video course 1', new Date(2018, 3, 11), 15, loremIpsum, 'Normal'),
      new CourseItem(2, 'Video course 2', new Date(2018, 3, 12), 100, loremIpsum, 'TopRated'),
      new CourseItem(3, 'Video course 3', new Date(2018, 11, 13), 170, loremIpsum, 'TopRated'),
      new CourseItem(4, 'Video course 4', new Date(2018, 3, 14), 120, loremIpsum, 'Low')
   ];

   constructor() { }

   getList(): CourseItem[] {
      return this.courseItems;
   }

   createCourse(newCourse: CourseItem) {
      this.courseItems.push(newCourse);
   }

   getItemById(itemId: number): CourseItem {
      return this.courseItems.find(item => item.Id === itemId);
   }

   updateItemById({ itemId, updatedItem }) {
      const itemForUpdate = this.getItemById(itemId);
      const indexOfItemForUpdate = this.courseItems.indexOf(itemForUpdate);
      this.courseItems[indexOfItemForUpdate] = updatedItem;
   }

   removeItemById(itemId: number) {
      this.courseItems = this.courseItems.filter(item => item.Id !== itemId);
   }
}
