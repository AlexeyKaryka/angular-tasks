import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap, mapTo } from 'rxjs/operators';
import { CourseItem, loremIpsum } from 'components/app-main/constants';
import { throwError } from 'rxjs';
import { SpinnerService } from 'services/spinner.service';
import { CourseItemRaw } from 'interfaces/cource';

const coursesEndpoint = 'http://localhost:3004/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

   private countPerChunk: number;
   private lastFetchedCourseNumber: number;

   constructor(private http: HttpClient, private spinnerService: SpinnerService) { }

   saveLastCourseNumber = rawCourseItems => {
      this.lastFetchedCourseNumber = this.lastFetchedCourseNumber
      ? this.lastFetchedCourseNumber + rawCourseItems.length
      : rawCourseItems.length - 1;
   }

   mapRawCourseItemToValid = courseItemRaw =>
      new CourseItem(
         courseItemRaw.id,
         courseItemRaw.name,
         courseItemRaw.date,
         courseItemRaw.length,
         courseItemRaw.description,
         courseItemRaw.isTopRated ? 'TopRated' : 'Normal',
         courseItemRaw.authors
      )

   mapRawCourseItemsToValid = courseItemsRaw =>
      courseItemsRaw.map(this.mapRawCourseItemToValid)

   getInitialList(countPerChunk): Observable<CourseItem[]> {
      this.countPerChunk = countPerChunk;
      this.spinnerService.startLoading();
      return this.http.get<CourseItemRaw[]>(coursesEndpoint, {
         params: {
           start: '0',
           count: '' + this.countPerChunk
         }
       })
         .pipe(
            catchError(error => {
               console.error(error);
               return throwError(error);
            }),
            tap(() => {
               this.spinnerService.resolveLoading();
            }),
            tap(this.saveLastCourseNumber),
            map(this.mapRawCourseItemsToValid)
         );
   }

   expendList(): Observable<CourseItem[]> {
      this.spinnerService.startLoading();
      return this.http.get<CourseItemRaw[]>(coursesEndpoint, {
         params: {
           start: '' + (this.lastFetchedCourseNumber + 1),
           count: '' + this.countPerChunk
         }
       })
         .pipe(
            catchError(error => {
               console.error(error);
               return throwError(error);
            }),
            tap(() => {
               this.spinnerService.resolveLoading();
            }),
            tap(this.saveLastCourseNumber),
            map(this.mapRawCourseItemsToValid)
         );
   }

   searchCourses(textFragment: string): Observable<CourseItem[]> {
      this.spinnerService.startLoading();
      return this.http.get<CourseItemRaw[]>(coursesEndpoint, {
         params: {
            textFragment
         }
       })
         .pipe(
            catchError(error => {
               console.error(error);
               return throwError(error);
            }),
            tap(() => {
               this.spinnerService.resolveLoading();
            }),
            map(this.mapRawCourseItemsToValid)
         );
   }

   createCourse(newCourse: CourseItem) {
      this.spinnerService.startLoading();
      return this.http.post<null>(coursesEndpoint, JSON.stringify({
         id: newCourse.Id,
         name: newCourse.Title,
         description: newCourse.Description,
         isTopRated: newCourse.Rating === 'TopRated',
         date: '' + newCourse.CreationDate,
         authors: newCourse.Authors,
         length: newCourse.Duration
       }))
         .pipe(
            catchError(error => {
               console.error(error);
               return throwError(error);
            }),
            tap(() => {
               this.spinnerService.resolveLoading();
            })
         );
   }

   getFreeItemId() {
      this.spinnerService.startLoading();
      return this.http.get<number>(coursesEndpoint)
         .pipe(
            catchError(error => {
               console.error(error);
               return throwError(error);
            }),
            tap(() => {
               this.spinnerService.resolveLoading();
            }),
            mapTo(courses => courses.length)
         );
   }

   getItemById(itemId: number) {
      this.spinnerService.startLoading();
      return this.http.get<CourseItemRaw>(`${coursesEndpoint}/${itemId}`)
         .pipe(
            catchError(error => {
               console.error(error);
               return throwError(error);
            }),
            tap(() => {
               this.spinnerService.resolveLoading();
            }),
            map(this.mapRawCourseItemToValid)
         );
   }

   updateItemById({ itemId, updatedItem }) {
      this.spinnerService.startLoading();
      return this.http.put<null>(`${coursesEndpoint}/${itemId}`, JSON.stringify({
         id: updatedItem.Id,
         name: updatedItem.Title,
         description: updatedItem.Description,
         isTopRated: updatedItem.Rating === 'TopRated',
         date: '' + updatedItem.CreationDate,
         length: updatedItem.Duration,
         authors: updatedItem.Authors
       }))
         .pipe(
            catchError(error => {
               console.error(error);
               return throwError(error);
            }),
            tap(() => {
               this.spinnerService.resolveLoading();
            })
         );
   }

   removeItemById(itemId: number) {
      this.spinnerService.startLoading();
      return this.http.delete<null>(`${coursesEndpoint}/${itemId}`)
         .pipe(
            catchError(error => {
               console.error(error);
               return throwError(error);
            }),
            tap(() => {
               this.spinnerService.resolveLoading();
            }),
         );
   }
}
