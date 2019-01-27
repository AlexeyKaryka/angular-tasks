import { Component, OnInit } from '@angular/core';
import { loremIpsum, CourseItem } from './constants';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.styl']
})
export class AppMainComponent implements OnInit {

   courseItems: CourseItem[];
   filteredCourseItems: CourseItem[];

   constructor(private coursesService: CoursesService) { }

   ngOnInit() {
      this.getCourseItems();
   }

   updateFilteredCourseItems(value) {
      console.log(value);
      this.filteredCourseItems = value;
   }

   getCourseItems() {
      this.courseItems = this.coursesService.getList();
   }

   deleteItem(itemId) {
      console.log(itemId, 'will be deleted');
      this.coursesService.removeItemById(itemId);
      this.getCourseItems();
   }

}
