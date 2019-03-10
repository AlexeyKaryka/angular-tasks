import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoursesService } from 'services/courses.service';
import { AddCourseComponent } from '../add-course/add-course.component';
import { State } from 'interfaces/ngrx';
import { CourseItem } from '../app-main/constants';

@Component({
  selector: 'app-edit-course',
  templateUrl: '../add-course/add-course.component.html',
  styleUrls: ['../add-course/add-course.component.styl']
})
export class EditCourseComponent extends AddCourseComponent implements OnInit {

   private id: number;
   private editingCourseItem: Observable<CourseItem>;

   constructor(
      protected router: Router,
      protected coursesService: CoursesService,
      private activatedRoute: ActivatedRoute,
      private store$: Store<State>
   ) {
      super(router, coursesService);
    }

   ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
         this.id = +params.id;
         this.editingCourseItem = this.store$.select(state => state.courseItems.find(item => item.Id === this.id));
         this.updateCourseProps();
      });
   }

   updateCourseProps() {
      this.editingCourseItem.subscribe(courseItem => {
         this.courseForm.controls.title.setValue(courseItem.Title);
         this.courseForm.controls.description.setValue(courseItem.Description);
         this.courseForm.controls.date.setValue('' + courseItem.CreationDate);
         this.courseForm.controls.durationInMinutes.setValue('' + courseItem.Duration);
         this.courseForm.controls.authors.setValue(courseItem.Authors);
      });
   }

   saveHandler() {
      this.coursesService.updateItemById({
         itemId: this.id,
         updatedItem: {
            Id: this.id,
            Title: this.courseForm.controls.title.value,
            CreationDate: this.courseForm.controls.date.value,
            Duration: +this.courseForm.controls.durationInMinutes.value,
            Description: this.courseForm.controls.description.value,
            Rating: 'normal',
            Authors: this.courseForm.controls.authors.value
         }
      }).subscribe(() => {
         this.router.navigate(['courses']);
      });
   }
}
