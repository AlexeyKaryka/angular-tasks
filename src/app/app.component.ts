import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from './authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

   public isUserAuthenticated: boolean;
   public userName: string;

   constructor(private authService: AuthorizationService, private router: Router) {
   }

   ngOnInit() {
      setInterval(() => { this.updateUserMetaData(); }, 1000);
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
      this.router.navigate(['login']);
   }
}
