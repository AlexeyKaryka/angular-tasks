import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { loremIpsum, CourseItem } from './constants';
import { CoursesService } from 'services/courses.service';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.styl']
})
export class AppMainComponent implements OnInit {

   @Output() emitGoToAddCoursePage = new EventEmitter<boolean>();

   public courseItems: CourseItem[] = [];
   public filteredCourseItems: CourseItem[];

   constructor(private coursesService: CoursesService) { }

   ngOnInit() {
      this.getCourseItems();
   }

   updateFilteredCourseItems(value) {
      this.filteredCourseItems = value;
   }

   getCourseItems() {
      this.coursesService.getInitialList(10).subscribe(courseItems => {
         this.courseItems = courseItems;
      });
   }

   getMoreCourseItems = () => {
      this.coursesService.expendList().subscribe(courseItems => {
         this.courseItems = this.courseItems.concat(courseItems);
      });
   }

   deleteItem(itemId) {
      this.coursesService.removeItemById(itemId).subscribe(() => {
         this.getCourseItems();
      });
   }
}
