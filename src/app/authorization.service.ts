import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

   private isUserAuthenticated = false;

   constructor() { }

   login(userName: string) {
      localStorage.setItem('userName', userName);
      this.isUserAuthenticated = true;
      console.log('You\'ve been successfully authenticated!');
   }

   logout() {
      this.isUserAuthenticated = false;
      localStorage.setItem('userName', '');
   }

   isAuthenticated(): boolean {
      return this.isUserAuthenticated;
   }

   getUserInfo(): string {
      return localStorage.getItem('userName');
   }
}
