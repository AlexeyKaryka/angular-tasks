import { Injectable } from '@angular/core';

interface LoginData {
   name: string;
   password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

   private isUserAuthenticated = !!localStorage.getItem('userName');

   constructor() { }

   login(userData: LoginData) {
      localStorage.setItem('userName', userData.name);
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
