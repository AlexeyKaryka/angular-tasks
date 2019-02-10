import { Component, OnInit } from '@angular/core';
import { loremIpsum, CourseItem } from './constants';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.styl']
})
export class AppMainComponent implements OnInit {

   courseItems: CourseItem[];
   filteredCourseItems: CourseItem[];

   constructor() { }

   ngOnInit() {
      this.courseItems = [
         new CourseItem(1, 'Video course 1', new Date(2018, 3, 11), 15, loremIpsum, 'Normal'),
         new CourseItem(2, 'Video course 2', new Date(2018, 3, 12), 100, loremIpsum, 'TopRated'),
         new CourseItem(3, 'Video course 3', new Date(2018, 11, 13), 170, loremIpsum, 'TopRated'),
         new CourseItem(4, 'Video course 4', new Date(2018, 3, 14), 120, loremIpsum, 'Low')
      ];
   }

   updateFilteredCourseItems(value) {
      console.log(value);
      this.filteredCourseItems = value;
   }

}
