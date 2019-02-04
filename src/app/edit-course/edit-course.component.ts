import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.styl']
})
export class EditCourseComponent implements OnInit {

   private id: number;
   public title: string;
   public description: string;
   public date: string;
   public durationInMinutes: string;
   public authors: string;

   constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private coursesService: CoursesService
   ) { }

   ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
         this.id = +params.id;
         this.updateCourseProps();
      });
   }

   updateCourseProps() {
      const course = this.coursesService.getItemById(this.id);
      this.title = course.Title;
      this.description = course.Description;
      this.date = '' + course.CreationDate;
      this.durationInMinutes = '' + course.Duration;
   }

   saveHandler() {
      this.coursesService.updateItemById({
         itemId: this.id,
         updatedItem: {
            Id: this.id,
            Title: this.title,
            CreationDate: new Date(this.date),
            Duration: +this.durationInMinutes,
            Description: this.description,
            Rating: 'normal'
         }
      });
      this.router.navigate(['courses']);
   }

   cancelHandler() {
      this.router.navigate(['courses']);
   }

}
