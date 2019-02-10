import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.styl']
})
export class AddCourseComponent implements OnInit {

   @Output() emitGoToCoursesPage = new EventEmitter<boolean>();
   public title: string;
   public description: string;
   public date: string;
   public durationInMinutes: string;
   public authors: string;

   constructor() { }

   ngOnInit() {
   }

   saveHandler() {
      console.log('save course!');
   }

   cancelHandler() {
      this.emitGoToCoursesPage.emit(true);
      console.log('cancel creating course!');
   }

}
