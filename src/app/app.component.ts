import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { AuthorizationService } from './services/authorization.service';

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
      this.updateUserMetaData();
      this.router.events.subscribe(event => {
         if (event instanceof RoutesRecognized && event.url.endsWith('/courses')) {
            this.updateUserMetaData();
         }
      });
   }

   updateUserMetaData() {
      this.isUserAuthenticated = this.authService.isAuthenticated();
      this.userName = this.authService.getUserInfo();
   }

   logout = () => {
      this.authService.logout();
      this.updateUserMetaData();
      this.router.navigate(['login']);
   }
}
