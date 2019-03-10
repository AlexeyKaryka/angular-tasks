import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoursesService } from 'services/courses.service';
import { AddCourseComponent } from '../add-course/add-course.component';
import { State } from 'ngrx/reducers';
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
         this.title = courseItem.Title;
         this.description = courseItem.Description;
         this.date = '' + courseItem.CreationDate;
         this.durationInMinutes = '' + courseItem.Duration;
      });
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
      }).subscribe(() => {
         this.router.navigate(['courses']);
      });
   }

   cancelHandler() {
      this.router.navigate(['courses']);
   }

}
