import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { loremIpsum, CourseItem } from './constants';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.styl']
})
export class AppMainComponent implements OnInit {

   @Output() emitGoToAddCoursePage = new EventEmitter<boolean>();

   public courseItems: CourseItem[];
   public filteredCourseItems: CourseItem[];
   public isAddCoursePage = false;

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

   goToAddCoursePageHandler(goToAddCoursePage) {
      this.isAddCoursePage = goToAddCoursePage;
   }

   goToCoursesPageHandler(goToCoursesPage) {
      this.isAddCoursePage = !goToCoursesPage;
   }

}
