import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CourseItem } from '../constants';
import { FilterCourseItemsPipe } from 'pipes/filter-course-items.pipe';
import { CoursesService } from 'services/courses.service';

@Component({
  selector: 'app-course-search',
  templateUrl: './app-course-search.component.html',
  styleUrls: ['./app-course-search.component.styl'],
  providers: [FilterCourseItemsPipe]
})
export class AppCourseSearchComponent implements OnInit {

   @Input() courseItems: CourseItem[];
   @Output() emitFilteredCourseItems = new EventEmitter<CourseItem[]>();

   constructor(private filterCourseItems: FilterCourseItemsPipe, private router: Router, private coursesService: CoursesService) { }

   public searchCourseInputValue: string;

   ngOnInit() {
   }

   public searchCourseHandler() {
      if (this.searchCourseInputValue) {
         this.coursesService.searchCourses(this.searchCourseInputValue).subscribe(courseItems => {
            this.emitFilteredCourseItems.emit(courseItems);
         });
      } else {
         this.emitFilteredCourseItems.emit(this.courseItems);
      }
   }

   public addCourseHandler() {
      this.router.navigate(['courses/new']);
   }

}
