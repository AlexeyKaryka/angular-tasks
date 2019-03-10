import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'ngrx/reducers';
import { AddCourseItems, ResetCourseItems, ChangeSearchResults } from 'ngrx/actions';
import { loremIpsum, CourseItem } from './constants';
import { CoursesService } from 'services/courses.service';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.styl']
})
export class AppMainComponent implements OnInit {

   @Output() emitGoToAddCoursePage = new EventEmitter<boolean>();

   public courseItems: Observable<CourseItem[]>;
   public filteredCourseItems: Observable<CourseItem[]>;
   public showSearchResults = false;

   constructor(private coursesService: CoursesService, private store$: Store<State>) {
      this.courseItems = this.store$.select('courseItems');
      this.filteredCourseItems = this.store$.select('foundItems');
   }

   ngOnInit() {
      this.getCourseItems();
   }

   updateFilteredCourseItems(value) {
      this.showSearchResults = true;
      this.store$.dispatch(new ChangeSearchResults(value));
   }

   getCourseItems() {
      this.coursesService.getInitialList(10).subscribe(courseItems => {
         this.store$.dispatch(new ResetCourseItems(courseItems));
      });
   }

   getMoreCourseItems = () => {
      this.coursesService.expendList().subscribe(courseItems => {
         this.store$.dispatch(new AddCourseItems(courseItems));
      });
   }

   deleteItem(itemId) {
      this.coursesService.removeItemById(itemId).subscribe(() => {
         this.getCourseItems();
      });
   }
}
