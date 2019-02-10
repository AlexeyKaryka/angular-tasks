import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

   private isUserAuthenticated: boolean;

   private userName: string;

   constructor(private authService: AuthorizationService) {
   }

   ngOnInit() {
      this.updateUserMetaData();
   }

   updateIsUserAuthenticated() {
      this.isUserAuthenticated = this.authService.isAuthenticated();
   }

   updateUserName() {
      this.userName = this.authService.getUserInfo();
   }

   updateUserMetaData() {
      this.updateIsUserAuthenticated();
      this.updateUserName();
   }

   logout = () => {
      this.authService.logout();
      this.updateUserMetaData();
   }

   login = userName => {
      this.authService.login(userName);
      this.updateUserMetaData();
   }
}
