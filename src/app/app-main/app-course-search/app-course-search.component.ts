import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './app-course-search.component.html',
  styleUrls: ['./app-course-search.component.styl']
})
export class AppCourseSearchComponent implements OnInit {

   constructor() { }

   private searchCourseInputValue: String;

   ngOnInit() {
   }

   private searchCourseHandler() {
      console.log(this.searchCourseInputValue);
   }

}
