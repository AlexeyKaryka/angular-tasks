import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject, throwError, of, defer, merge } from 'rxjs';
import { catchError, tap, map, mergeMap, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from 'ngrx/reducers';
import { UpdateUserName, ResetUserName } from 'ngrx/actions';
import { User } from 'interfaces/user';
import { SpinnerService } from 'services/spinner.service';

interface LoginData {
   name: string;
   password: string;
}

interface DataWithToken {
   token: string;
}

export interface UserInfo {
   id: string;
   fakeToken: string;
   name: {
      first: string;
      last: string;
   };
   login: string;
   password: string;
}

export const userToken = 'userToken';
const loginEndpoint = 'http://localhost:3004/auth/login';
const userInfoEndpoint = 'http://localhost:3004/auth/userInfo';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

   constructor(
      private http: HttpClient,
      private router: Router,
      private spinnerService: SpinnerService,
      private store$: Store<State>
   ) {
   }

   getUserName = userInfo => {
      return `${userInfo.name.first} ${userInfo.name.last}`;
   }

   login(userData: LoginData) {
      this.spinnerService.startLoading();
      this.http.post<DataWithToken>(loginEndpoint, JSON.stringify({ login: userData.name, password: userData.password }))
         .pipe(
            catchError((error) => {
               console.error(error);
               return throwError(error);
            }),
            tap((data: DataWithToken) => {
               localStorage.setItem(userToken, data.token);
               this.router.navigate(['courses']);
               this.spinnerService.resolveLoading();
            }),
            switchMap(() => this.getUserInfo().pipe(
               tap(userInfo => {
                  this.store$.dispatch(new UpdateUserName(userInfo ? this.getUserName(userInfo) : ''));
               })
            )),
         )
         .subscribe();
   }

   logout() {
      localStorage.removeItem(userToken);
      this.router.navigate(['login']);
      this.store$.dispatch(new ResetUserName());
   }

   isAuthenticated(): Observable<boolean> {
      return this.getUserInfo().pipe(
         map(userInfoResponse => !!userInfoResponse)
      );
   }

   getUserInfo(): Observable<UserInfo | null> {
      return localStorage.getItem(userToken)
         ? this.http.post<UserInfo>(userInfoEndpoint, null)
         .pipe(
            catchError((error) => {
               console.error(error);
               return null;
            })
         )
         : of(null);
   }
}
