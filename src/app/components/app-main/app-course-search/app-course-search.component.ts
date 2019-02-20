import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, timer, fromEvent, Subscription } from 'rxjs';
import { filter, debounce } from 'rxjs/operators';
import { CourseItem } from '../constants';
import { FilterCourseItemsPipe } from 'pipes/filter-course-items.pipe';
import { CoursesService } from 'services/courses.service';

@Component({
  selector: 'app-course-search',
  templateUrl: './app-course-search.component.html',
  styleUrls: ['./app-course-search.component.styl'],
  providers: [FilterCourseItemsPipe]
})
export class AppCourseSearchComponent implements OnInit, OnDestroy {

   @Input() courseItems: CourseItem[];
   @Output() emitFilteredCourseItems = new EventEmitter<CourseItem[]>();

   constructor(private filterCourseItems: FilterCourseItemsPipe, private router: Router, private coursesService: CoursesService) { }

   public searchCourseInputValue: string;
   private searchSubscription: Subscription;

   ngOnInit() {
      const searchObservable = fromEvent(document.getElementsByClassName('searchCourseInput'), 'keyup')
         .pipe(
            filter(() => this.searchCourseInputValue.length >= 3),
            debounce(() => timer(1000))
         );
      this.searchSubscription = searchObservable.subscribe(this.searchCourseByValue);
   }

   ngOnDestroy() {
      this.searchSubscription.unsubscribe();
   }

   private searchCourseByValue = () => {
      this.coursesService.searchCourses(this.searchCourseInputValue).subscribe(courseItems => {
         this.emitFilteredCourseItems.emit(courseItems);
      });
   }

   public addCourseHandler() {
      this.router.navigate(['courses/new']);
   }

}
