import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap, mapTo } from 'rxjs/operators';
import { CourseItem, loremIpsum } from 'components/app-main/constants';
import { throwError } from 'rxjs';


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

   private courseItems: CourseItem[] = [
      new CourseItem(1, 'Video course 1', new Date(2018, 3, 11), 15, loremIpsum, 'Normal'),
      new CourseItem(2, 'Video course 2', new Date(2018, 3, 12), 100, loremIpsum, 'TopRated'),
      new CourseItem(3, 'Video course 3', new Date(2018, 11, 13), 170, loremIpsum, 'TopRated'),
      new CourseItem(4, 'Video course 4', new Date(2018, 3, 14), 120, loremIpsum, 'Low')
   ];

   constructor(private http: HttpClient) { }

   saveLastCourseNumber = rawCourseItems => {
      this.lastFetchedCourseNumber = this.lastFetchedCourseNumber
      ? this.lastFetchedCourseNumber + rawCourseItems.length
      : rawCourseItems.length - 1;
   }

   mapRawCourseItemsToValid = courseItemsRaw =>
      courseItemsRaw.map(courseItemRaw =>
         new CourseItem(
            courseItemRaw.id,
            courseItemRaw.name,
            new Date(courseItemRaw.date),
            courseItemRaw.length,
            courseItemRaw.description,
            courseItemRaw.isTopRated ? 'TopRated' : 'Normal'
         )
      )

   getInitialList(countPerChunk): Observable<CourseItem[]> {
      this.countPerChunk = countPerChunk;
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
            tap(this.saveLastCourseNumber),
            map(this.mapRawCourseItemsToValid)
         );
   }

   expendList(): Observable<CourseItem[]> {
      console.log(this.lastFetchedCourseNumber);
      console.log(this.countPerChunk);
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
            tap(this.saveLastCourseNumber),
            map(this.mapRawCourseItemsToValid)
         );
   }

   searchCourses(searchValue: string): Observable<CourseItem[]> {
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
            map(this.mapRawCourseItemsToValid)
         );
   }

   createCourse(newCourse: CourseItem) {
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
            })
         );
   }

   getFreeItemId() {
      return this.http.get<number>(this.coursesEndpoint)
         .pipe(
            catchError(error => {
               console.error(error);
               return throwError(error);
            }),
            mapTo(courses => courses.length)
         );
   }

   getItemById(itemId: number): CourseItem {
      return this.courseItems.find(item => item.Id === itemId);
   }

   updateItemById({ itemId, updatedItem }) {
      const itemForUpdate = this.getItemById(itemId);
      const indexOfItemForUpdate = this.courseItems.indexOf(itemForUpdate);
      this.courseItems[indexOfItemForUpdate] = updatedItem;
   }

   removeItemById(itemId: number) {
      return this.http.delete<null>(`${this.coursesEndpoint}/${itemId}`)
         .pipe(
            catchError(error => {
               console.error(error);
               return throwError(error);
            })
         );
   }
}
