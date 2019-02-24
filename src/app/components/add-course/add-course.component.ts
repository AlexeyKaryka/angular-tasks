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
      this.coursesService.getFreeItemId().subscribe(freeItemId => {
         this.coursesService.createCourse({
            Id: +freeItemId,
            Title: this.title,
            CreationDate: new Date(this.date),
            Duration: +this.durationInMinutes,
            Description: this.description,
            Rating: 'normal'
         }).subscribe(() => {
            this.router.navigate(['courses']);
         });
      });
   }

   cancelHandler() {
      this.router.navigate(['courses']);
   }

}
