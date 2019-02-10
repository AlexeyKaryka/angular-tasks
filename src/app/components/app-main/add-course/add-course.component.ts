import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.styl']
})
export class AddCourseComponent implements OnInit {

   public title: string;
   public description: string;
   public date: string;
   public durationInMinutes: string;
   public authors: string;

   constructor(protected router: Router, protected coursesService: CoursesService) { }

   ngOnInit() {
   }

   saveHandler() {
      // We can calculate new course's id if we suppose that every new
      // course plainly increment previous course's id
      // First course's id is 1, not 0, so if we have 4 courses, fifth course will have id 5
      const lastCourseId = this.coursesService.getList().length + 1;
      this.coursesService.createCourse({
         Id: lastCourseId + 1,
         Title: this.title,
         CreationDate: new Date(this.date),
         Duration: +this.durationInMinutes,
         Description: this.description,
         Rating: 'normal'
      });
      this.router.navigate(['courses']);
   }

   cancelHandler() {
      this.router.navigate(['courses']);
   }

}
