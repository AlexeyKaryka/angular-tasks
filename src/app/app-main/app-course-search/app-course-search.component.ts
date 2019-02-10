import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseItem } from '../constants';
import { FilterCourseItemsPipe } from '../../pipes/filter-course-items.pipe';

@Component({
  selector: 'app-course-search',
  templateUrl: './app-course-search.component.html',
  styleUrls: ['./app-course-search.component.styl'],
  providers: [FilterCourseItemsPipe]
})
export class AppCourseSearchComponent implements OnInit {

   @Input() courseItems: CourseItem[];
   @Output() emitFilteredCourseItems = new EventEmitter<CourseItem[]>();

   constructor(private filterCourseItems: FilterCourseItemsPipe) { }

   private searchCourseInputValue: String;

   ngOnInit() {
   }

   private searchCourseHandler() {
      console.log(this.searchCourseInputValue);
      if (this.searchCourseInputValue) {
         const filteredCourseItems = this.filterCourseItems.transform({
            items: this.courseItems, filteringValue: this.searchCourseInputValue
         });
         console.log(filteredCourseItems);
         this.emitFilteredCourseItems.emit(filteredCourseItems);
      } else {
         this.emitFilteredCourseItems.emit(this.courseItems);
      }
   }

}