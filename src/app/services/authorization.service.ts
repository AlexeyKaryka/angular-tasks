import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from 'interfaces/user';

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

   constructor(private http: HttpClient) { }

   login(userData: LoginData) {
      console.log(userData.name, userData.password);
      return this.http.post<DataWithToken>(loginEndpoint, JSON.stringify({ login: userData.name, password: userData.password }))
         .pipe(
            tap((data: DataWithToken) => {
               localStorage.setItem(userToken, data.token);
            }),
            catchError((error) => {
               console.error(error);
               return throwError(error);
            })
         );
   }

   logout() {
      localStorage.removeItem(userToken);
   }

   isAuthenticated(): boolean {
      return !!localStorage.getItem(userToken);
   }

   getUserInfo(): Observable<UserInfo | null> {
      return localStorage.getItem(userToken)
         ? this.http.post<UserInfo>(userInfoEndpoint, null)
         .pipe(catchError((error) => {
            console.error(error);
            return throwError(error);
         }))
         : of(null);
   }
}
