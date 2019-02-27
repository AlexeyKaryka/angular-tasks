import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap, mapTo } from 'rxjs/operators';
import { CourseItem, loremIpsum } from 'components/app-main/constants';
import { throwError } from 'rxjs';
import { SpinnerService } from 'services/spinner.service';


interface AuthorRaw {
   id: number;
   firstName: string;
   lastName: string;
}
interface CourseItemRaw {
   id: number;
   name: string;
   description: string;
   isTopRated: boolean;
   date: string;
   authors: AuthorRaw[];
   length: number;
}

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

   private countPerChunk: number;
   private lastFetchedCourseNumber: number;
   private coursesEndpoint = 'http://localhost:3004/courses';

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
         new Date(courseItemRaw.date),
         courseItemRaw.length,
         courseItemRaw.description,
         courseItemRaw.isTopRated ? 'TopRated' : 'Normal'
      )

   mapRawCourseItemsToValid = courseItemsRaw =>
      courseItemsRaw.map(this.mapRawCourseItemToValid)

   getInitialList(countPerChunk): Observable<CourseItem[]> {
      this.countPerChunk = countPerChunk;
      this.spinnerService.startLoading();
      return this.http.get<CourseItemRaw[]>(this.coursesEndpoint, {
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
      return this.http.get<CourseItemRaw[]>(this.coursesEndpoint, {
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

   searchCourses(searchValue: string): Observable<CourseItem[]> {
      this.spinnerService.startLoading();
      return this.http.get<CourseItemRaw[]>(this.coursesEndpoint, {
         params: {
            textFragment: searchValue
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
      return this.http.post<null>(this.coursesEndpoint, JSON.stringify({
         id: newCourse.Id,
         name: newCourse.Title,
         description: newCourse.Description,
         isTopRated: newCourse.Rating === 'TopRated',
         date: '' + newCourse.CreationDate,
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
      return this.http.get<number>(this.coursesEndpoint)
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
      return this.http.get<CourseItemRaw>(`${this.coursesEndpoint}/${itemId}`)
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
      // const itemForUpdate = this.getItemById(itemId);
      // const indexOfItemForUpdate = this.courseItems.indexOf(itemForUpdate);
      // this.courseItems[indexOfItemForUpdate] = updatedItem;
      this.spinnerService.startLoading();
      return this.http.put<null>(`${this.coursesEndpoint}/${itemId}`, JSON.stringify({
         id: updatedItem.Id,
         name: updatedItem.Title,
         description: updatedItem.Description,
         isTopRated: updatedItem.Rating === 'TopRated',
         date: '' + updatedItem.CreationDate,
         length: updatedItem.Duration
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
      return this.http.delete<null>(`${this.coursesEndpoint}/${itemId}`)
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
