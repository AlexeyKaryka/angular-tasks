import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

   private userLogin = 'PetyaPiter';
   private isUserAuthenticated = false;

   constructor() { }

   login(userName: string) {
      this.userLogin = userName;
      this.isUserAuthenticated = true;
      console.log('You\'ve been successfully authenticated!');
   }

   logout() {
      this.isUserAuthenticated = false;
      this.userLogin = '';
   }

   isAuthenticated(): boolean {
      return this.isUserAuthenticated;
   }

   getUserInfo(): string {
      return this.userLogin;
   }
}
