import { Injectable } from '@angular/core';
import { Subject, of, merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

   public loadingSubject: Subject<boolean> = new Subject();

   constructor() {
   }

   getLoadingStatusSubscription() {
      return this.loadingSubject;
   }

   startLoading() {
      this.loadingSubject.next(true);
   }

   resolveLoading() {
      this.loadingSubject.next(false);
   }
}
