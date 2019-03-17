import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'services/courses.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.styl']
})
export class AddCourseComponent implements OnInit {

   public courseForm: FormGroup;

   constructor(protected router: Router, protected coursesService: CoursesService) {
      this.courseForm = new FormGroup({
         title: new FormControl('', [Validators.maxLength(50), Validators.required]),
         description: new FormControl('', [Validators.maxLength(500), Validators.required]),
         date: new FormControl(),
         durationInMinutes: new FormControl(),
         authors: new FormControl()
      });
   }

   ngOnInit() {
   }

   getFormFieldValue(field) {
      return this.courseForm.controls[field].value;
   }

   getFormFieldErrors(field, errorName) {
      return this.courseForm.controls[field].dirty
         ? this.courseForm.controls[field].invalid
         : null;
   }

   saveHandler() {
      const authors = this.getFormFieldValue('authors').map(author => {
         const name = author.split(' ');
         return {
            firstName: name[0],
            lastName: name[1]
         };
      });

      this.coursesService.getFreeItemId().subscribe(freeItemId => {
         this.coursesService.createCourse({
            Id: +freeItemId,
            Title: this.getFormFieldValue('title'),
            CreationDate: this.getFormFieldValue('date'),
            Duration: +this.getFormFieldValue('durationInMinutes'),
            Description: this.getFormFieldValue('description'),
            Rating: 'normal',
            Authors: authors
         }).subscribe(() => {
            this.router.navigate(['courses']);
         });
      });
   }

   cancelHandler() {
      this.router.navigate(['courses']);
   }

}
